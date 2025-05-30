<script setup lang="ts">
import UserCard from '~/components/pages/about-us/UserCard.vue'
import type {Creator} from '~/types/about-us/Creator'

const creators = ref<Creator[]>([
  {
    name: 'Abdulaziz Abdukhalilzoda',
    role: 'Backend Developer',
    image: '/images/creators/abdu.png',
    socials: ['mdi:telegram', 'mdi:facebook-box', 'mdi:instagram', 'mdi:twitter']
  },
  {
    name: 'Sardor Salimov',
    role: 'Project Manager',
    image: '/images/creators/sardor.png',
    socials: ['mdi:telegram', 'mdi:facebook-box', 'mdi:instagram', 'mdi:twitter']
  },
  {
    name: 'Ozodxon Rabbanaqulov',
    role: 'Frontend Developer',
    image: '/images/creators/ozod.jpg',
    socials: ['mdi:telegram', 'mdi:facebook-box', 'mdi:instagram', 'mdi:twitter']
  }
])
</script>

<template>
  <div class="creators">
    <h1 class="title">Creators</h1>
    <div class="flex justify-evenly gap-3 mt-6">
      <div v-for="(creator, index) of creators" :key="index">
        <UserCard :creator="creator"/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.creators {
  .title {
    @apply text-center text-2xl my-4 text-slate-600 font-semibold;
  }
}
</style>
