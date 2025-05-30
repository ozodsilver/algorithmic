<script setup lang="ts">

import type {Creator} from '~/types/about-us/Creator';

const props = defineProps<{
  creator: Creator
}>()
</script>

<template>
  <div class="creator-card">
    <img  :src="props.creator.image" alt="" class="creator">
    <h1 class="name">{{ props.creator.name }}</h1>
    <h2 class="role">{{ props.creator.role }}</h2>
    <div class="socials">
      <a v-for="(social, index) in props.creator.socials" :key="index" :href="social" target="_blank">
        <Icon :name="social"/>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.creator-card {
  @apply w-[270px] h-[300px] rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-custom-light ;
  background: #FFFFFF40;
  box-shadow: 10px 10px 19px 0px #E5EBF1, -8px -8px 100px 0px rgba(255, 255, 255, 0.71);
  backdrop-filter: blur(50px);

  .creator {
    @apply w-[120px] h-[120px] object-cover rounded-full mx-auto block;
    object-fit: cover;
    object-position: center 20%;
  }
  .socials{
    @apply flex justify-center gap-4 mt-3 text-slate-400;
  }

  .name{
    @apply text-base text-center text-slate-400 mt-4 font-semibold;
  }
  .role{
    @apply text-center text-slate-400 text-xs;
  }
}
</style>
