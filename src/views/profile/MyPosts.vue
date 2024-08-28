<script setup>
import { useThemeStore } from "../../stores/useThemeStore";
const themeStore = useThemeStore();
defineProps({
  postHeader: String,
  postBody: String,
  postComments: Number,
  postDate: String,
  likes: Number,
  dislikes: Number,
  tags: Array,
});
</script>

<template>
  <div class="pt-6 pb-6 border-b-2 flex items-center">
    <div class="w-4/5 ">
      <div>
        <div
          class="text-2xl font-bold"
          :class="{ 'text-white': themeStore.isDark }"
        >
          {{ postHeader }}
        </div>
        <div
          class="text-base font-light mt-6"
          :class="{ 'text-white': themeStore.isDark }"
        >
          {{ postBody }}
        </div>
      </div>
      <div class="flex mt-4" :class="{ 'text-white': themeStore.isDark }">
        <div class="flex gap-4 text-sm font-light">
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
      <div class="text-sm font-light mt-6">{{ postDate }}</div>
    </div>
    <div class="w-1/5 ml-4 rounded-lg overflow-hidden">
      <img src="../../assets/img/postimg.jpg" alt="" />
      <div class="flex justify-center mt-4 gap-8">
        <div class="flex flex-col justify-center">
          <span
            class="material-symbols-outlined cursor-pointer"
            :class="{ 'text-white': themeStore.isDark }"
            @click="like"
          >
            thumb_up
          </span>
          <div>{{ likes }}</div>
        </div>
        <div class="flex flex-col justify-center">
          <span
            class="material-symbols-outlined cursor-pointer"
            :class="{ 'text-white': themeStore.isDark }"
            @click="like"
          >
            thumb_down
          </span>
          <div>{{ dislikes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>