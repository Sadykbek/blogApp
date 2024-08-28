<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useThemeStore } from "../stores/useThemeStore";
import router from "@/router";

defineProps({
  isInputs : Boolean
})

const themeStore = useThemeStore();
const isRotated = ref(false);

function rotateProfilePic(event) {
  isRotated.value = !isRotated.value;
  const dropdown = document.getElementById("dropdown");

  dropdown.classList.toggle("hidden");
  event.stopPropagation(); // Останавливаем распространение события

  // Вращение аватарки
  if (isRotated.value) {
    event.target.style.transform = "rotate(360deg)";
  } else {
    event.target.style.transform = "rotate(0deg)";
  }
}

function handleClickOutside(event) {
  const dropdown = document.getElementById("dropdown");
  const avatar = document.querySelector(".avatar img");

  if (!dropdown.contains(event.target) && !avatar.contains(event.target)) {
    dropdown.classList.add("hidden");
    isRotated.value = false;

    // Возвращаем аватарку в исходное положение
    avatar.style.transform = "rotate(0deg)";
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header
    class="px-16 py-4 flex justify-between items-center border-b-2 fixed w-full top-0 z-50"
    :class="{ 'bg-black text-white': themeStore.isDark, 'bg-white ': !themeStore.isDark }"
  >
    <a href="/" class="uppercase text-3xl font-bold">reader</a>

    <div class="searchBar flex items-center w-2/4 mx-auto">
      <div class="relative w-full">
        <span v-if="isInputs"
          class="material-symbols-outlined absolute top-3 left-2 text-gray-400 ml-4"
          :class="{ 'text-white': themeStore.isDark }"
        >
          search
        </span>
        <input v-if="isInputs"
          type="text"
          class="border-2 rounded-full py-2 pl-14 w-full"
          :class="{
            'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
              themeStore.isDark,
            'bg-white  border-gray-400': !themeStore.isDark,
          }"
          placeholder="Search..."
        />
      </div>
    </div>

    <div class="links flex gap-8 items-center">
      <button class="flex items-center gap-1 border-2 py-2 px-4 rounded-xl hover:bg-slate-200" :class="{ 'hover:text-black': themeStore.isDark }">
        write
        <span class="material-icons text-xl">edit</span>
      </button>
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
      <!-- registered -->
      <div class="relative flex flex-col">
        <div class="avatar w-10 border border-gray-400 rounded-full overflow-hidden p-0.5">
          <img
            @click="rotateProfilePic"
            class="transition-transform ease-out duration-300"
            src="../assets/img/avatar.webp"
            alt="Avatar"
          />
        </div>
        <div
          id="dropdown"
          class="hidden bg-cyan-950 absolute top-[130%] left-[-35px] p-4 rounded-lg w-28 transition-all ease-out duration-300 flex flex-col gap-2"
        >
          <div class="triangle"></div>
          <router-link to="/TheProfile" class="text-sm hover:font-bold text-white cursor-pointer">
            profile
          </router-link>
          <hr />
          <router-link to="TheSettings" class="text-sm hover:font-bold text-white cursor-pointer">
            settings
          </router-link>
          <hr />
          <div class="text-white text-sm hover:font-bold cursor-pointer">
            log out
          </div>
        </div>
      </div>
      <!-- not registered -->
      <div class="flex rounded-lg gap-4 py-3 px-4 border-2 hidden">
        <router-link to="/sign">
          sign in
        </router-link>
        <div class="border h-auto"></div>
        <router-link to="/sign">
          sign up
        </router-link>
      </div>
    </div>
  </header>
</template>

<style>
.triangle {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #083344;
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
