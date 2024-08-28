<script setup>
import Popularuser from "./lefts/Popularuser.vue";
import { useThemeStore } from "../stores/useThemeStore";
const themeStore = useThemeStore();
</script>

<template>
  <div class="ml-6 mt-10  fixed right-0 top-[8%] w-3/12">
    <div class="ml-4 mr-8">
      <div
        class="text-2xl font-bold mb-6"
        :class="{ 'text-white': themeStore.isDark }"
      >
        Most active users
      </div>
      <div class="flex flex-col gap-4">
        <Popularuser :isDark="themeStore.isDark" />
        <Popularuser :isDark="themeStore.isDark" />
        <Popularuser :isDark="themeStore.isDark" />
        <Popularuser :isDark="themeStore.isDark" />
      </div>

      <div>
        <div class="text-xl font-bold mb-6" :class="{ 'text-white': themeStore.isDark }">Trending topics</div>
        <div class="border rounded-xl p-4">
         <div>
            <div class="text-xl font-bold" :class="{ 'text-white': themeStore.isDark }">How to use SQL in Laravel</div>
            <div class="font-light mb-2" :class="{ 'text-slate-200': themeStore.isDark, 'text-slate-500': !themeStore.isDark }">I started https://laracasts.com/series/learning-vue-step-by-step series.…</div>
         </div>
          <div class="flex items-center gap-3">
            <div class="w-8 rounded-full overflow-hidden">
              <img src="../assets/img/avatar.webp" alt="Avatar" />
            </div>
              <div class="flex items-end">
                <div
                  class="text-base font-bold"
                  :class="{ 'text-slate-100': themeStore.isDark, 'text-slate-400': !themeStore.isDark }"
                >
                  Nick Name
                </div>
                <div
                  class=" text-xs pb-0.5 ml-4"
                  :class="{ 'text-slate-100': themeStore.isDark, 'text-slate-400': !themeStore.isDark }"
                >
                  aug 16 2024
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>