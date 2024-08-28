// src/stores/useThemeStore.js
import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  // Initialize theme based on session storage
  onMounted(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme !== null) {
      isDark.value = storedTheme === 'true';
    }
    document.body.style.backgroundColor = isDark.value ? 'black' : 'white';
  });

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    sessionStorage.setItem("theme", isDark.value);
    document.body.style.backgroundColor = isDark.value ? 'black' : 'white';
  };

  return {
    isDark,
    toggleDarkMode,
  };
});
