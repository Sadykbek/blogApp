<script setup>
import { useThemeStore } from "../../stores/useThemeStore";
import { ref } from "vue";
const themeStore = useThemeStore();



// State for password visibility
let isPasswordVisible = ref(false);
let isPasswordVisiblerepeat = ref(false);
let password = ref("");
let repeatPassword = ref("");

// Toggle visibility based on input field type
function togglePasswordVisibility(field) {
  if (field === "password") {
    isPasswordVisible.value = !isPasswordVisible.value;
  } else if (field === "repeat") {
    isPasswordVisiblerepeat.value = !isPasswordVisiblerepeat.value;
  }
}
</script>
<template>
    <form action="##" class="flex flex-col w-2/4 h-auto mx-10 pt-10">
        <input
          type="text"
          placeholder="nickname" maxlength="36"
          class=" border border-slate-500 py-3 px-6 rounded-xl mb-10 mt-14"
          :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"
        />
      <input
        type="email"
        placeholder="email"
        class="mb-10 border border-slate-500 py-3 px-6 rounded-xl"
        :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"/>
      <div class="flex mb-8">
        <div class="flex items-center w-1/2 mr-10 h-8 m-auto">
          <input
            :type="isPasswordVisible ? 'text' : 'password'"
            v-model="password"
            class="border border-slate-500 rounded-l-xl py-3 px-6"
            placeholder="Enter your password" minlength="8"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"/>
          <button
            @click="togglePasswordVisibility('password')"
            type="button"
            class="py-1 px-4 border border-slate-500 rounded-r-xl"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }">
            <span
              v-if="isPasswordVisible" class="material-symbols-outlined text-3xl m-0.5">
              visibility
            </span>
            <span v-else class="material-symbols-outlined text-3xl m-0.5">
               visibility_off
            </span>
          </button>
        </div>
        <div class="flex items-center w-1/2 h-8 m-auto">
          <input
            :type="isPasswordVisiblerepeat ? 'text' : 'password'"
            v-model="repeatPassword"
            class="border border-slate-500 rounded-l-xl py-3 px-6"
            placeholder="confirm password" minlength="8"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"/>
          <button
            @click="togglePasswordVisibility('repeat')"
            type="button"
            class="py-1 px-4 border border-slate-500 rounded-r-xl"
            :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }">
            <span
              v-if="isPasswordVisiblerepeat"
              class="material-symbols-outlined text-3xl m-0.5">
              visibility
            </span>
            <span v-else class="material-symbols-outlined text-3xl m-0.5">
              visibility_off
            </span>
          </button>
        </div>
      </div>

      <input
        type="submit"
        value="Sign Up"
        class="border py-3 px-6 rounded-xl text-white text-xl cursor-pointer"
         :class="themeStore.isDark ? `border-green-700 bg-green-700  hover:bg-green-500 focus:bg-green-500` : `border-green-500 bg-green-500  hover:bg-green-400 focus:bg-green-400`"
      />
    </form>
</template>