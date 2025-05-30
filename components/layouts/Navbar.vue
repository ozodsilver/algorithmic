<script lang="ts" setup>
import Avatar from 'primevue/avatar';

const route = useRoute()
const title = computed(() => route.meta.title || 'Home')

const navigateToProfile = () => {
  navigateTo('/profile')
}

const hasSettings = computed(() => {
  return route.path.includes('/profile')
})
</script>


<template>
  <header class="navbar">
    <h1 class="text-xl font-bold">{{ title }}</h1>

    <div class="profile-block">
      <div v-if="!hasSettings" class="user" @click="navigateToProfile">
        <h2>Muzaffar Mirzaev</h2>
        <img
          src="https://tanecooil.ru/assets/images/man.webp"
          class="w-[40px] h-[40px] rounded-full object-contain"
        >
      </div>

      <Icon v-else name="mdi:cog-outline" />

      <Avatar v-badge.danger="4">
        <template #icon>
          <Icon name='mdi:bell-outline' class="text-lg"/>
        </template>
      </Avatar>
    </div>

  </header>
</template>


<style lang="scss" scoped>
.navbar {
  @apply px-4  shadow-custom-light pr-10 py-3 flex justify-between items-center ;
  .profile-block {
    @apply flex text-primary items-center gap-2;
    .user {
      @apply flex items-center gap-2 cursor-pointer;
    }
  }
}
</style>
