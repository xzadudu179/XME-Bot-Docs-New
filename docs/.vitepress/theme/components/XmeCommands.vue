<script lang="ts">
import { inBrowser } from "vitepress";

/**
 * 指令文档的源地址，接口会实时更新，所以运行时不重新构建也能拿到最新指令。
 * 该接口需要返回 `Access-Control-Allow-Origin` 才能被浏览器跨域读取。
 */
const DOCS_API = "https://api.xmebot.com/docs.md";
const DOCS_CONTENT = "https://api.xmebot.com/docs";

/**
 * 模块级缓存：一个页面生命周期内只请求一次，来回到「指令列表」都复用同一份数据，
 * 只有刷新页面才会重新请求。
 *
 * 注意：这段代码必须放在普通 <script> 块里。`<script setup>` 的顶层代码是
 * **每个组件实例**都会执行的，那样缓存会随组件重建而失效。
 */
let pendingRequest: Promise<string> | null = null;

function loadCommandsMarkdown(): Promise<string> {
    if (!pendingRequest) {
        pendingRequest = fetch(DOCS_API, { cache: "no-store" })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then((text) => {
                if (!text.trim()) throw new Error("返回内容为空");
                return text;
            })
            .catch((err) => {
                // 失败不留缓存，下次进入本页可以重试
                pendingRequest = null;
                throw err;
            });
    }
    return pendingRequest;
}

// 进入站点即预取：本模块随主题包在主包初始化时求值，不必等点到「指令列表」才开始请求
if (inBrowser) {
    loadCommandsMarkdown().catch(() => {
        // 失败交给组件的错误态展示，这里吞掉避免未处理的 rejection
    });
}
</script>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import MarkdownIt from "markdown-it";
// @ts-ignore 内部模块没有类型声明；vitepress 的 exports 字段允许按 dist/* 路径引入。
// 用命名空间导入，这样即使将来该导出改名，也只是目录缺条目而不会让构建失败。
import * as vitepressAppUtils from "vitepress/dist/client/app/utils.js";

const md = new MarkdownIt({ linkify: true });

// 沿用默认主题的代码块结构（div[class*=language-] + span.lang），以复用 .vp-doc 的样式
md.renderer.rules.fence = (tokens, idx) => {
    const lang = (tokens[idx].info.trim().split(/\s+/)[0] || "text").toLowerCase();
    const escapedLang = md.utils.escapeHtml(lang);
    return `<div class="language-${escapedLang}"><span class="lang">${escapedLang}</span><pre><code>${md.utils.escapeHtml(
        tokens[idx].content,
    )}</code></pre></div>`;
};

// 与 VitePress 的 slugify 保持一致，使动态标题的 id 和站内其它标题完全相同
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_=+[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const slugify = (str: string) =>
    str
        .normalize("NFKD")
        .replace(rCombining, "")
        .replace(rControl, "")
        .replace(rSpecial, "-")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/^(\d)/, "_$1")
        .toLowerCase();

const container = ref<HTMLElement | null>(null);
const html = ref("");
const error = ref("");
const loading = ref(true);

/**
 * 给动态渲染出来的标题补 id 与锚点链接，使其行为与静态页面的标题一致。
 * 默认主题的右侧目录是运行时扫描 `.VPDoc` 下「带 id 的标题」生成的，没有 id 就不会出现在目录里。
 */
function decorateHeadings(root: HTMLElement) {
    const used = new Set<string>();
    for (const el of document.querySelectorAll("#VPContent :is(h1, h2, h3, h4, h5, h6)[id]")) {
        used.add((el as HTMLElement).id);
    }

    for (const el of root.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
        if (el.querySelector(":scope > .header-anchor")) continue;

        const title = (el.textContent ?? "").trim();
        const base = slugify(title);
        if (!base) continue;

        // 与 markdown-it-anchor 一致：重名标题依次加 -1、-2 后缀
        let id = base;
        for (let i = 1; used.has(id); i++) id = `${base}-${i}`;
        used.add(id);
        el.id = id;

        const anchor = document.createElement("a");
        anchor.className = "header-anchor";
        anchor.href = `#${id}`;
        anchor.setAttribute("aria-label", `Permalink to “${title}”`);
        anchor.textContent = "#";
        el.append(anchor);
    }
}

/**
 * 让 VitePress 重新扫描一次目录。内容更新回调由 Content 组件在自身挂载/更新时触发，
 * 而我们的内容是异步注入的，父组件不会因此重渲染，所以需要手动触发。
 */
function refreshPageOutline() {
    const callbacks = (vitepressAppUtils as { contentUpdatedCallbacks?: Array<() => void> })
        .contentUpdatedCallbacks;
    if (!callbacks) return;
    for (const fn of callbacks) fn();
}

onMounted(async () => {
    try {
        html.value = md.render(await loadCommandsMarkdown());
    } catch (err) {
        error.value = err instanceof Error ? err.message : String(err);
    } finally {
        loading.value = false;
    }

    // 容器要等 loading 分支切走之后才存在，所以补 id 和刷新目录放在 nextTick 之后
    await nextTick();
    if (container.value) {
        decorateHeadings(container.value);
        refreshPageOutline();
    }
});
</script>

<template>
    <p v-if="loading" class="xme-commands-status">正在获取最新的指令列表…</p>
    <p v-else-if="error" class="xme-commands-status">
        无法获取指令列表（{{ error }}），请
        <a :href="DOCS_CONTENT" target="_blank" rel="noreferrer">查看原始文档</a>。
    </p>
    <div v-else ref="container" v-html="html"></div>
</template>

<style scoped>
.xme-commands-status {
    color: var(--vp-c-text-2);
}
</style>
