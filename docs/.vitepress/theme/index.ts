// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import NotFound from "./NotFound.vue";
import XmeCommands from "./components/XmeCommands.vue";
import "./style.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            "not-found": () => h(NotFound),
        });
    },
    enhanceApp({ app }) {
        app.component("XmeCommands", XmeCommands);
    },
} satisfies Theme;
