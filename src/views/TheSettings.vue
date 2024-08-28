<script setup>
import { ref } from "vue";
import { useThemeStore } from "../stores/useThemeStore";
import Headertop from "@/components/Headertop.vue";
const themeStore = useThemeStore();
let nickname = ref("Nickname");
import AvatarImg from "../assets/img/avatar.webp";
const avatarSrc = ref(AvatarImg); // путь по умолчанию или данные для аватарки
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>
<template>
  <Headertop />
  <div class="px-12">
    <div class="text-5xl font-bold text-center mt-28">Settings</div>
    <div class="w-4/6 mt-10 mx-auto">
      <div class="rounded-full border-2 px-10 py-3 font-semibold flex items-center hover:bg-slate-200">
        change password
      <span class="material-symbols-outlined text-2xl ml-auto"> chevron_right </span>
      </div>
    </div>

    <div class="px-72" id="change">
      <div class="mt-20 flex justify-between">
        <div class="w-32 h-32 overflow-hidden border-2 p-0.5 rounded-full">
          <img
            :src="avatarSrc"
            alt="Avatar"
            class="cursor-pointer w-full h-full object-cover"
            @click="triggerFileInput"
          />
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="onFileChange"
          />
        </div>
        <div class="w-3/4">
          <label for="nick" class="text-2xl">Email</label>
          <div class="flex mt-10 gap-16">
            <input
              type="text"
              id="nick"
              class="border border-slate-500 rounded-xl py-2 w-full mx-auto"
              :class="{
                'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
                  themeStore.isDark,
                'bg-white  border-gray-400': !themeStore.isDark,
              }"
            />
            <input
              type="submit"
              value="Confirm"
              class="border rounded-xl py-2 px-6 w-1/6 mx-auto"
              :class="
                themeStore.isDark
                  ? ` bg-teal-700  hover:bg-teal-500 focus:bg-teal-500`
                  : ` bg-teal-500  hover:bg-teal-400 focus:bg-teal-400`
              "
            />
          </div>
          <div class="mt-10">
            <label for="pass" class="text-2xl">Password</label>
            <div class="flex mt-10 gap-16">
              <input
                type="password"
                id="pass"
                class="border border-slate-500 rounded-xl py-2 w-full mx-auto"
                :class="{
                  'bg-slate-600 placeholder:text-white  border-gray-100 value:text-white text-white':
                    themeStore.isDark,
                  'bg-white  border-gray-400': !themeStore.isDark,
                }"
              />
              <input
                type="submit"
                value="Confirm"
                class="border rounded-xl py-2 px-6 w-1/6 mx-auto"
                :class="
                  themeStore.isDark
                    ? ` bg-teal-700  hover:bg-teal-500 focus:bg-teal-500`
                    : ` bg-teal-500  hover:bg-teal-400 focus:bg-teal-400`
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>