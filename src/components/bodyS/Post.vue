<script setup>
import {ref} from 'vue'
defineProps({
  isDark: Boolean,
});
let isLiked = false;
const like = (event) => {
  isLiked = !isLiked;
  if(isLiked){
    event.target.classList.remove("material-symbols-outlined");
  event.target.classList.add("material-icons");
  likes.value++
  }
  else{
    event.target.classList.remove("material-icons");
  event.target.classList.add("material-symbols-outlined");
  }
  
};
</script>
<template>
  <div class="pt-6 border-b-2 flex items-center">
    <div class="w-4/5">
      <div class="flex gap-4 mb-2">
        <div class="w-10 rounded-full overflow-hidden">
          <img src="../../assets/img/child-1837375_640.webp" alt="Avatar" />
        </div>
        <div class="flex flex-col">
          <div class="flex items-end">
            <div class="text-base font-bold" :class="{ 'text-white': isDark }">
              Nick Name
            </div>
            <div
              class="text-slate-400 text-xs pb-0.5 ml-4"
              :class="{ 'text-slate-200': isDark }"
            >
              aug 16 2024
            </div>
          </div>
          <div class="text-sm text-slate-400">Senior Full stack developer</div>
        </div>
      </div>
      <div>
        <div class="text-2xl font-bold" :class="{ 'text-white': isDark }">
          Vue 2 - Mutating props vue-warn
        </div>
        <div class="text-base font-light" :class="{ 'text-white': isDark }">
          I started https://laracasts.com/series/learning-vue-step-by-step
          series. … I stopped on the lesson Vue, Laravel, and AJAX with this
          error: vue.js:2574 [Vue warn]: Avoid mutating a prop directly since
          the value...
        </div>
      </div>
      <div class="flex mt-4 mb-8" :class="{ 'text-white': isDark }">
        <div class="flex gap-4 text-sm font-light">
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            Java
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            JavaScript
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            Python
          </div>
          <div
            :class="{ 'bg-gray-700 hover:bg-gray-600': isDark }"
            class="bg-gray-300 hover:bg-gray-500 rounded-full px-4 py-2 cursor-pointer hover:text-white"
          >
            C++
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5 ml-4 rounded-lg overflow-hidden">
      <img src="../../assets/img/postimg.jpg" alt="" />
      <div class="flex justify-center mt-4 gap-8">
        <div class="flex flex-col justify-center">
        <span class="material-symbols-outlined cursor-pointer " :class="{ 'text-white': isDark }" @click="like">
          thumb_up
        </span>
      </div>
        <span class="material-symbols-outlined cursor-pointer" :class="{ 'text-white': isDark }" @click="like">
          thumb_down
        </span>
      </div>
    </div>
  </div>
</template>