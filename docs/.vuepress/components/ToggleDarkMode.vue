<template>
  <button class="toggle-dark-mode" @click="toggleDarkMode">
    <span class="toggle-dark-mode-text">{{ darkMode ? "Light" : "Dark" }}</span>
    <span class="toggle-dark-mode-icon">{{ darkMode ? "☀️" : "🌙" }}</span>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/client";

const themeData = useThemeData();
const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
  localStorage.setItem(
    "vuepress-color-scheme",
    darkMode.value ? "dark" : "light"
  );
};

onMounted(() => {
  darkMode.value = document.documentElement.classList.contains("dark");
});

watch(
  () => themeData.value.darkMode,
  (val) => {
    if (val !== darkMode.value) {
      toggleDarkMode();
    }
  }
);
</script>

<style scoped>
.toggle-dark-mode {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--c-text);
}

.toggle-dark-mode-text {
  margin-right: 0.5rem;
}

.toggle-dark-mode-icon {
  font-size: 1.2rem;
}
</style>
