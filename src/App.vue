<script setup>
import { useThemeStore } from './stores/useThemeStore';

const themeStore = useThemeStore();
</script>

<template>
  
  <div class="transition-colors ease-out duration-300" :class="{ ' text-white': themeStore.isDark }">
    <router-view></router-view>
  </div>
</template>

