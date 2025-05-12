<script setup lang="ts">
import Rating from 'primevue/rating';

const {userImage, title, subtitle, star, rating, level} = defineProps<{
  userImage: string
  title: string
  subtitle: string
  star: number
  rating: number,
  level: string
}>()

const starsValue = computed(()=>{
  return star
})

const levelPicture = (level: string) => {
  switch (level) {
    case 'first':
      return '/images/rating/first.svg';
    case 'second':
      return '/images/rating/second.svg';
    case 'third':
      return '/images/rating/third.svg';
    default:
      return '';
  }
};
</script>

<template>
  <div class="user-rating">
    <Card>
      <template #content>
        <div class="flex gap-2 relative">
          <NuxtImg class="w-[50px] h-[50px] rounded-xl object-cover" :src="userImage"/>
          <div class="flex flex-col">
            <h1 class="font-bold text-dark text-sm m-0">{{ title }}</h1>
            <h2 class="text-xs text-light">{{ subtitle }}</h2>
            <Rating v-model="starsValue" :cancel="false"/>
          </div>
          <h2 class="absolute text-sm  bottom-0 right-0">{{ rating }}</h2>

          <NuxtImg class="absolute w-[30px] -top-3 right-0" :src="levelPicture(level as string)" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
.user-rating {
  .user-card {
    @apply p-2 bg-white rounded-xl;
  }

  .p-card .p-card-body {
    padding: 12px !important;
  }
}
</style>
