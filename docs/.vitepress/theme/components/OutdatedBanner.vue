<script setup>
import { ref, watch } from 'vue';
import { MorphIcon } from "morphicons/vue";
import { X } from "lucide"

const hostname = window.location.hostname;
const showBanner = ref(true);

function CloseBanner() {
    localStorage.setItem("bannerClosed", true);
    SetBannerClosed();
}

function SetBannerClosed() {
    showBanner.value = false;
    document.documentElement.style.setProperty(
        "--banner-height",
        "0px"
    );
    document.documentElement.style.setProperty(
        "--banner-top",
        "var(--vp-nav-height)"
    )
}

// 预渲染发生在 Node 里，没有 localStorage，这里要判一下，否则每次构建都会报错
if (typeof localStorage !== "undefined" && localStorage.getItem("bannerClosed")) {
    SetBannerClosed();
}
console.log(showBanner.value)
if (hostname != "docs.xme.179.life")
    SetBannerClosed();
</script>

<style>
:root {
    /* Banner 高度；关闭时脚本会把它置为 0 */
    --banner-height: calc(var(--vp-nav-height) / 1.5);
    /* VPLocalNav（小导航）的高度 */
    --local-nav-height: 48px;
    /* 横幅贴在导航栈下方，所以吸顶位置 = 当前顶部导航栈的高度 */
    --banner-top: var(--local-nav-height);
}

@media (max-width: 768px) {
    :root {
        --banner-height: calc(var(--vp-nav-height) * 1.3);
    }
}

/* 960px 起 VPNav 变成 fixed，小导航吸顶在它下面 */
@media (min-width: 960px) {
    :root {
        --banner-top: calc(var(--vp-nav-height) + var(--local-nav-height));
    }
}

/* 1280px 起不再显示小导航，只剩大导航 */
@media (min-width: 1280px) {
    :root {
        --banner-top: var(--vp-nav-height);
    }
}

/* 横幅排到小导航之后、正文之前；配合 sticky 让它自己占位，
   这样正文和侧栏都不需要额外补偿偏移 */
.Layout > .site-banner {
    order: 1;
}

.Layout > .VPSidebar,
.Layout > .VPContent,
.Layout > .VPFooter {
    order: 2;
}

/* 侧栏是 fixed 定位、不参与文档流，所以要手动让出横幅的位置
   （正文靠 sticky 已经自动占位，不需要处理） */
@media (min-width: 1280px) {
    .VPSidebar {
        padding-top: calc(var(--banner-top) + var(--banner-height)) !important;
    }
}
</style>

<style scoped>
.site-banner {
    width: 100%;
    height: var(--banner-height);
    background: #3d341b;
    /* 小屏时大导航会随滚动滚走、小导航吸顶，sticky 让横幅始终跟在导航栈下面 */
    position: sticky;
    top: var(--banner-top);
    z-index: 29;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1279px) {
    .site-banner {
        z-index: 19;
        width: calc(100% - var(--vp-sidebar-width));
        margin-left: auto;
    }
}

@media (max-width: 959px) {
    .site-banner {
        z-index: 19;
        width: 100%;
    }
}

.site-banner-inner {
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    font-size: 14px;
}

.text {
    flex: 1;
}

.text a {
    color: var(--vp-c-warning-1);
}

@media (max-width: 768px) {
    .site-banner-inner {
        padding: 8px 16px;
        gap: 16px;
        font-size: 13px;
    }
}
</style>

<template>
    <div class="site-banner" :style="{ display: showBanner ? 'flex' : 'none' }">
        <div class="site-banner-inner">
            <p class="text">注意：docs.xme.179.life 域名即将停止服务，请前往 <a
                    href="https://docs.xmebot.com">https://docs.xmebot.com</a> 查看文档</p>
            <button @click="CloseBanner">
                <MorphIcon :icon="X" />
            </button>
        </div>
    </div>
</template>
