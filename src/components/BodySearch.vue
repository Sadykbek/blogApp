<script setup>
import { useThemeStore } from "../stores/useThemeStore";
import { ref } from "vue";
import Post from "./bodyS/Post.vue";

let activeSelect = ref(false);
const themeStore = useThemeStore();

function activateSelect() {
  activeSelect.value = !activeSelect.value;
  console.log(activeSelect.value);
}
</script>
<template>
  <div class="px-12 mt-[4%]">
    <div class="flex">
    <!-- <div class="searchBar flex items-center w-full">
      <div class="relative w-full">
        <span
          class="material-symbols-outlined absolute top-3 left-2 text-gray-400 ml-4"
        >
          search
        </span>
        <input
          type="text"
          class="border-2 border-gray-400 rounded-full py-2  pl-14 w-full"
          placeholder="Search..."
        />
      </div>
     
    </div> -->
  
  </div>
    <div class="border-b-2 pb-8 pt-4">
      <div class="flex mt-8 items-center">
        <div class="text-2xl font-bold" :class="{ 'text-white': themeStore.isDark }">Articles</div> <div class="flex ml-8" :class="{ 'text-white': themeStore.isDark }">
        <div
          class="text-gray-600 text-lg "
          :class="{ 'text-white': themeStore.isDark }"
          >topics:</div
        >
        <div class="flex gap-6 ml-4 text-sm">
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': themeStore.isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            Java
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': themeStore.isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            JavaScript
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': themeStore.isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            Python
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': themeStore.isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            C++
          </div>
        </div>
      </div>
      </div>
    </div>
    <Post :isDark="themeStore.isDark"/>
    <Post :isDark="themeStore.isDark"/>
    <Post :isDark="themeStore.isDark"/>
    <Post :isDark="themeStore.isDark"/>
    <Post :isDark="themeStore.isDark"/>
  </div>
</template>