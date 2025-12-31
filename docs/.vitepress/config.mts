import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "XME-Bot Docs",
    description: "XME-Bot Docs",
    themeConfig: {
        logo: "https://image.179.life/images/deon/icon.webp",
    },
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-cn",
            themeConfig: {
                nav: [
                    { text: "首页", link: "/" },
                    { text: "使用文档", link: "/markdown-examples" },
                    { text: "术语表", link: "/glossary" },
                    { text: "投喂九九", link: "https://afdian.com/a/xzadudu179" },
                    { text: "功能建议", link: "https://docs.qq.com/form/page/DU1dNckFnVGRZeEZt" },
                ],

                sidebar: [
                    {
                        text: "使用帮助",
                        items: [
                            { text: "术语表", link: "/glossary" },
                            { text: "Runtime API Examples", link: "/api-examples" },
                        ],
                    },
                ],
                socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
            },
        },
        en: {
            label: "English",
            lang: "en",
            themeConfig: {
                nav: [
                    { text: "Home", link: "/" },
                    { text: "Document", link: "/markdown-examples" },
                    { text: "Glossary", link: "/glossary" },
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
            },
        },
    },
});
