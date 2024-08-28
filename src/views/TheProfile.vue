<script setup>
import Headertop from "@/components/Headertop.vue";
import MyPosts from "./profile/MyPosts.vue";
import { ref } from "vue";
import { useThemeStore } from "../stores/useThemeStore";
const themeStore = useThemeStore();
const registrationDate = ref("2022-01-01");
</script>
<template>
  <Headertop :is-inputs="true" />
  <div class="mt-32">
    <div class="pb-4 px-12 flex border-b-2">
      <div>
        <div
          class="rounded-full w-36 overflow-hidden border-2 p-0.5"
          :class="{
            'bg-slate-400': themeStore.isDark,
            'bg-slate-200': !themeStore.isDark,
          }"
        >
          <img src="../assets/img/avatar.webp" alt="" />
        </div>
      </div>
      <div class="ml-8">
        <div class="text-4xl font-semibold">Nick Name</div>
        <div class="text-lg font-light">writer</div>
        <div
          class="text-xs"
          :class="{
            'text-slate-200': themeStore.isDark,
            'text-slate-400': !themeStore.isDark,
          }"
        >
          in this site since {{ registrationDate }}
        </div>
      </div>
      <div class="ml-auto mr-10 mt-auto mb-4">
        <button
          class="px-5 py-3 rounded-xl font-bold text-white"
          :class="
            themeStore.isDark
              ? ` bg-teal-700  hover:bg-teal-500 focus:bg-teal-500`
              : ` bg-teal-500  hover:bg-teal-400 focus:bg-teal-400`
          "
        >
          Manage posts
        </button>
      </div>
    </div>
  </div>
  <div class="px-12 mt-8">
    <MyPosts
      post-header="How Can I Optimize Real-Time Speech-to-Text Conversion for Faster Chatbot Interactions?"
      post-body="I'm working on implementing real-time speech-to-text conversion for a chatbot, where the user can enable the microphone and start speaking, and the spoken words will be displayed immediately. I have experimented with OpenAI Whisper and the SpeechRecognition library, but both methods have shown latency in response time. I am seeking solutions to reduce transcription time and improve the speed of real-time processing."
      :likes="10"
      :dislikes="2"
      post-date="2022-01-01"
      post-comments="5"
    />
    <MyPosts
      post-header="How Can I Optimize Real-Time Speech-to-Text Conversion for Faster Chatbot Interactions?"
      post-body="I'm working on implementing real-time speech-to-text conversion for a chatbot, where the user can enable the microphone and start speaking, and the spoken words will be displayed immediately. I have experimented with OpenAI Whisper and the SpeechRecognition library, but both methods have shown latency in response time. I am seeking solutions to reduce transcription time and improve the speed of real-time processing."
      :likes="10"
      :dislikes="2"
      post-date="2022-01-01"
      post-comments="5"
    />
    <MyPosts
      post-header="How Can I Optimize Real-Time Speech-to-Text Conversion for Faster Chatbot Interactions?"
      post-body="I'm working on implementing real-time speech-to-text conversion for a chatbot, where the user can enable the microphone and start speaking, and the spoken words will be displayed immediately. I have experimented with OpenAI Whisper and the SpeechRecognition library, but both methods have shown latency in response time. I am seeking solutions to reduce transcription time and improve the speed of real-time processing."
      :likes="10"
      :dislikes="2"
      post-date="2022-01-01"
      post-comments="5"
    />
    <MyPosts
      post-header="How Can I Optimize Real-Time Speech-to-Text Conversion for Faster Chatbot Interactions?"
      post-body="I'm working on implementing real-time speech-to-text conversion for a chatbot, where the user can enable the microphone and start speaking, and the spoken words will be displayed immediately. I have experimented with OpenAI Whisper and the SpeechRecognition library, but both methods have shown latency in response time. I am seeking solutions to reduce transcription time and improve the speed of real-time processing."
      :likes="10"
      :dislikes="2"
      post-date="2022-01-01"
      post-comments="5"
    />
    <MyPosts
      post-header="How Can I Optimize Real-Time Speech-to-Text Conversion for Faster Chatbot Interactions?"
      post-body="I'm working on implementing real-time speech-to-text conversion for a chatbot, where the user can enable the microphone and start speaking, and the spoken words will be displayed immediately. I have experimented with OpenAI Whisper and the SpeechRecognition library, but both methods have shown latency in response time. I am seeking solutions to reduce transcription time and improve the speed of real-time processing."
      :likes="10"
      :dislikes="2"
      post-date="2022-01-01"
      post-comments="5"
    />
  </div>
</template>