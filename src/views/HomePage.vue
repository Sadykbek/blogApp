<script setup>
import Headertop from '../components/Headertop.vue'
import BodySearch from '../components/BodySearch.vue'
import LeftSide from '@/components/LeftSide.vue';
</script>
<template>
   <Headertop is-inputs="true" />
   <div class="flex">
   <BodySearch class="border-r-2  w-9/12"/>
   <LeftSide />
</div>
</template>