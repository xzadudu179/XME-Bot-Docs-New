import { defineConfig } from "vitepress";

/**
 * 指令列表由页面在运行时拉取，构建产物里没有正文，因此搜索索引里也搜不到指令。
 * 这里在构建时再拉一份同样的文档喂给索引，让 Ctrl+K 能搜到各个指令并精确跳到对应锚点。
 *
 * 注意：索引本身是构建产物，所以指令更新后需要重新构建才会进入索引
 * （可用 Vercel Deploy Hook 或定时任务自动触发，无需手动操作）。
 */
const DOCS_API = "https://api.xmebot.com/docs.md";
const COMMANDS_PAGE = "help.md";

type SearchRenderEnv = {
    path: string;
    relativePath: string;
    cleanUrls?: boolean;
    frontmatter?: { search?: boolean } & Record<string, unknown>;
};

type SearchRenderHook = {
    _render?: (
        src: string,
        env: SearchRenderEnv,
        md: { renderAsync: (src: string, env?: unknown) => Promise<string> },
    ) => Promise<string> | string;
};

/**
 * VitePress 的搜索索引只认渲染后的 markdown，`_render` 是官方文档给出的自定义渲染入口
 * （尚未包含在公开类型里，所以这里单独声明形状后用展开的方式注入，避免类型报错）。
 */
const searchIndexRender: SearchRenderHook = {
    async _render(src, env, md) {
        const html = await md.renderAsync(src, env);

        // 官方要求：自定义 _render 后需要自己处理 search: false。env.frontmatter 要在渲染之后再读
        if (env.frontmatter?.search === false) return "";
        if (env.relativePath !== COMMANDS_PAGE) return html;

        try {
            const res = await fetch(DOCS_API);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const docs = await res.text();
            if (!docs.trim()) throw new Error("返回内容为空");

            const docsHtml = await md.renderAsync(docs, {
                path: env.path,
                relativePath: env.relativePath,
                cleanUrls: env.cleanUrls,
            });
            return html + docsHtml;
        } catch (err) {
            // 构建时拿不到远端文档就退化成只索引页面本身，不让构建失败
            console.warn(`[local-search] 拉取指令文档失败，本次索引不含指令列表：${err}`);
            return html;
        }
    },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "XME-Bot Docs",
    description: "XME-Bot Docs",
    base: '/',
    head: [["link", { rel: "icon", href: "https://image.179.life/images/icon.ico" }]],
    lang: "zh-CN",
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        externalLinkIcon: true,
        logo: "https://image.179.life/images/deon/icon.webp",
        search: {
            provider: "local",
            options: {
                ...searchIndexRender,
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                },
                            },
                        },
                    },
                },
            },
        },
        outline: {
            level: [2, 4],
        },
    },
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-cn",
            themeConfig: {
                lastUpdated: {
                    text: "最后更新于",
                    formatOptions: {
                        dateStyle: "full",
                        timeStyle: "medium",
                    },
                },
                nav: [
                    { text: "首页", link: "/" },
                    { text: "使用文档", link: "/glossary" },
                    { text: "投喂九九", link: "https://afdian.com/a/xzadudu179" },
                    { text: "功能建议", link: "https://docs.qq.com/form/page/DU1dNckFnVGRZeEZt" },
                ],
                docFooter: {
                    prev: "上一页面",
                    next: "下一页面",
                },
                sidebar: [
                    {
                        text: "使用文档",
                        items: [
                            { text: "术语表", link: "/glossary" },
                            { text: "指令列表", link: "/help" },
                            { text: "API", link: "/apis" },
                        ],
                    },
                    {
                        text: "创建 BOT 实例",
                        items: [{ text: "快速开始", link: "/get_started" }],
                    },
                    {
                        text: "其他",
                        items: [{ text: "其他", link: "/other" }],
                    },
                ],
                socialLinks: [{ icon: "github", link: "https://github.com/xzadudu179/XME-bot-qq" }],
                footer: {
                    message: "XME-Bot Released under the Apache 2.0 License.",
                    copyright: "Copyright © 2024-present xzadudu179",
                },
                editLink: {
                    pattern: "https://github.com/xzadudu179/XME-Bot-Docs-New/blob/main/docs/:path",
                    text: "在 Github 上编辑该页面",
                },
                outline: {
                    label: "页面导航",
                },
            },
        },
        en: {
            label: "English",
            lang: "en",
            themeConfig: {
                lastUpdated: {
                    text: "Last Updated at",
                    formatOptions: {
                        dateStyle: "full",
                        timeStyle: "medium",
                    },
                },
                nav: [
                    { text: "Home", link: "/en/" },
                    { text: "Document", link: "/en/glossary" },
                    { text: "Sponsor", link: "https://afdian.com/a/xzadudu179" },
                    { text: "Feedback", link: "https://github.com/xzadudu179/XME-bot-qq/issues/new" },
                ],

                sidebar: [
                    {
                        text: "Documents",
                        items: [
                            { text: "Glossary", link: "/en/glossary" },
                            { text: "Commands List", link: "/en/help" },
                            { text: "API", link: "/en/apis" },
                        ],
                    },
                    {
                        text: "Create BOT Instance",
                        items: [{ text: "Get Started", link: "/en/get_started" }],
                    },
                    {
                        text: "Others",
                        items: [{ text: "Other", link: "/en/other" }],
                    },
                ],
                socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
                editLink: {
                    pattern: "https://github.com/xzadudu179/XME-Bot-Docs-New:path",
                    text: "Edit this page on GitHub",
                },
            },
        },
    },
});
