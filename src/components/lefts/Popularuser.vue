<script setup>
defineProps({
   isDark : Boolean
})
</script>
<template>
   <div class="flex">
      <div class="w-16 border border-gray-400 rounded-full overflow-hidden p-0.5">
         <img src="../../assets/img/avatar.webp" alt="">
      </div>
      <div class="ml-4">
         <div class="text-xl font-bold " :class="{ 'text-white': isDark }">Nick Name</div>
         <div class="text-sm" :class="{'text-slate-200': isDark, 'text-slate-400': !isDark}">Senior Full stack developer</div>
      </div>
      <div></div>
   </div>
</template>