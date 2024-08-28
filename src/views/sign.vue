<template>
<div class="pt-6 h-screen" :class="{ 'text-white' : themeStore.isDark}">
    <router-link to="/" class="uppercase text-3xl font-bold ml-16">reader</router-link>
   <div class="absolute top-6 right-40">

   <button @click="themeStore.toggleDarkMode" class="relative">
        <span
          class="material-symbols-outlined transition-transform duration-500"
          :class="{
            'rotate-180 opacity-0': themeStore.isDark,
            'rotate-0': !themeStore.isDark,
          }"
        >
          light_mode
        </span>
        <span
          class="material-symbols-outlined transition-transform duration-500 absolute inset-0"
          :class="{
            'rotate-0 text-white': themeStore.isDark,
            '-rotate-180 opacity-0': !themeStore.isDark,
          }"
        >
          dark_mode
        </span>
      </button>
   </div>
  <div class="flex px-20 pt-20">
    <SignIn/>
    <div class="line h-auto border-2 border-slate-400"></div>
   <SignUp/>
  </div>
</div>
</template>
 
 <script setup>
import SignIn from "./SigninAndUp/SignIn.vue";
import { useThemeStore } from "../stores/useThemeStore";
import SignUp from "./SigninAndUp/SignUp.vue";
const themeStore = useThemeStore();

</script>
 