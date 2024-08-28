<script setup>
import { useThemeStore } from "../../stores/useThemeStore";

const themeStore = useThemeStore();

import { ref } from "vue";

// State for password visibility
let Password = ref("");
let Pass = ref(false);

// Toggle visibility based on input field type
function togglePasswordVisibility(field) {
  if (field === "Pass") {
    Pass.value = !Pass.value;
  }
}
</script>

<template>
   <form action="#" class="flex flex-col w-2/4 h-auto mx-10 pt-10">
      <input
        type="text"
        placeholder="Username or email" maxlength="36"
        class="mb-20 border border-slate-500 py-3 px-6 rounded-xl mt-14"
        :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"
      />
      <div class="flex items-center mb-20 h-8 w-auto">
          <input
            :type=" Pass ? 'text' : 'password'"
            v-model="Password"
            class="border border-slate-500 rounded-l-xl py-3 px-6 w-full"
            placeholder="Enter your password" minlength="8"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"/>
          <button
            @click="togglePasswordVisibility('Pass')"
            type="button"
            class="py-1 px-4 border border-slate-500 rounded-r-xl"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }">
            <span
              v-if="Pass" class="material-symbols-outlined text-3xl m-0.5">
              visibility
            </span>
            <span v-else class="material-symbols-outlined text-3xl m-0.5">
               visibility_off
            </span>
          </button>
        </div>
      <input
        type="submit"
        value="Sign In"
        class="border  py-3 px-6 rounded-xl text-white text-xl cursor-pointer"
        :class="themeStore.isDark ? `border-green-700 bg-green-700  hover:bg-green-500 focus:bg-green-500` : `border-green-500 bg-green-500  hover:bg-green-400 focus:bg-green-400`"
      />
      <a class="mt-8" :class="themeStore.isDark ? 'text-blue-200' : 'text-blue-500'" href="#">forgot password?</a>
    </form>
</template>