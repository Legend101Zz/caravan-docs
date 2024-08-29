<template>
  <header class="navbar">
    <ToggleSidebarButton
      v-if="shouldShowSidebarButton"
      @toggle="$emit('toggle-sidebar')"
    />

    <RouterLink :to="siteBrandLink">
      <img
        v-if="siteBrandLogo"
        class="logo"
        :src="withBase(siteBrandLogo)"
        :alt="siteBrandTitle"
      />
      <span
        v-if="siteBrandTitle"
        class="site-name"
        :class="{ 'can-hide': siteBrandLogo }"
        >{{ siteBrandTitle }}</span
      >
    </RouterLink>

    <div class="navbar-items-wrapper" :style="navbarBgColor">
      <slot name="before" />
      <NavbarItems />
      <slot name="after" />
      <ToggleDarkMode />
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import {
  useRouteLocale,
  useSiteLocaleData,
  useThemeLocaleData,
} from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import NavbarItems from "@theme/NavbarItems.vue";
import ToggleSidebarButton from "@theme/ToggleSidebarButton.vue";
import ToggleDarkMode from "./ToggleDarkMode.vue";

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const themeData = useThemeData();

const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
);
const siteBrandLogo = computed(() => themeLocale.value.logo);
const siteBrandTitle = computed(() => siteLocale.value.title);

const shouldShowSidebarButton = computed(
  () => themeData.value.toggleSidebar ?? true
);

const navbarBgColor = computed(() => {
  const cssVar = themeData.value.darkMode
    ? "--c-bg-navbar-dark"
    : "--c-bg-navbar";
  return { backgroundColor: `var(${cssVar})` };
});
</script>
