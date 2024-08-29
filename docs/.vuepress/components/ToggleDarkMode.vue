<template>
  <div class="toggle-dark-mode">
    <span class="toggle-label">Dark Mode</span>
    <label class="toggle-switch">
      <input type="checkbox" @change="toggleDarkMode" :checked="isDarkMode" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    this.isDarkMode = document.documentElement.classList.contains("dark");
  },
  methods: {
    toggleDarkMode() {
      const htmlElement = document.documentElement;
      htmlElement.classList.toggle("dark");
      this.isDarkMode = htmlElement.classList.contains("dark");
      localStorage.setItem(
        "vuepress-color-scheme",
        this.isDarkMode ? "dark" : "light"
      );
    },
  },
};
</script>
