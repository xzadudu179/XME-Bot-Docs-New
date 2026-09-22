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
    )
}

if (localStorage.getItem("bannerClosed")) {
    SetBannerClosed();
}
console.log(showBanner.value)
if (hostname != "docs.xme.179.life")
    showBanner.value = false;
</script>

<style>
:root {
    --banner-height: calc(var(--vp-nav-height) / 1.5);
    --banner-margin: var(--banner-height);
    --nav-height: var(--vp-nav-height);
}

@media (max-width: 1280px) {
    :root {
        --nav-height: calc(var(--vp-nav-height) + 47px);
        --banner-margin: calc(var(--banner-height) + 47px);
    }
}

@media (max-width: 768px) {
    :root {
        --banner-height: calc(var(--vp-nav-height) * 1.3);
        --banner-margin: calc(var(--banner-height) + 47px);
    }
}


.VPSidebar,
.VPContent,
.VPContent .aside-container {
    margin-top: var(--banner-margin) !important;
}
</style>

<style scoped>
.site-banner {
    width: 100%;
    background: #3d341b;
    margin-top: var(--nav-height);
    height: var(--banner-height);
    position: fixed;
    z-index: 29;
    /* display: flex; */
    align-items: center;
    justify-content: center;
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