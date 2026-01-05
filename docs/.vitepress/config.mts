import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "XME-Bot Docs",
    description: "XME-Bot Docs",
    themeConfig: {
        logo: "https://image.179.life/images/deon/icon.webp",
        search: {
            provider: "local",
            options: {
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
    },
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-cn",
            themeConfig: {
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
                    pattern: "https://github.com/xzadudu179/XME-Bot-Docs-New/docs/:path",
                    text: "在 Github 上编辑该页面",
                },
            },
        },
        en: {
            label: "English",
            lang: "en",
            themeConfig: {
                nav: [
                    { text: "Home", link: "/" },
                    { text: "Document", link: "/glossary" },
                    { text: "Sponsor", link: "https://afdian.com/a/xzadudu179" },
                    { text: "Feedback", link: "https://github.com/xzadudu179/XME-bot-qq/issues/new" },
                ],

                sidebar: [
                    {
                        text: "Examples",
                        items: [
                            { text: "Markdown Examples", link: "/markdown-examples" },
                            { text: "Runtime API Examples", link: "/api-examples" },
                        ],
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
