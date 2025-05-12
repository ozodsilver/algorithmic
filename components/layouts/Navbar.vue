<script lang="ts" setup>
import Avatar from 'primevue/avatar';

const route = useRoute()
const title = computed(() => route.meta.title || 'Home')
</script>


<template>
  <header class="navbar">
    <h1 class="text-xl font-bold">{{ title }}</h1>

    <div class="profile-block">
      <Icon
          name='mdi:account-circle'
          class="text-2xl"
      />
      sign in
         <Avatar v-badge.danger="4">
          <template #icon>
          <Icon name='mdi:bell-outline' />
          </template>
        </Avatar>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.navbar {
  @apply px-4  pr-10 pt-2 flex justify-between items-center ;
  .profile-block {
    @apply flex text-primary items-center gap-2;
  }
}
</style>
