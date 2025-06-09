<script lang="ts" setup>
import Avatar from 'primevue/avatar';
import OverlayPanel from 'primevue/overlaypanel';
import UserPanel from '~/components/layouts/navbar/UserPanel.vue';

const route = useRoute()
const title = computed(() => route.meta.title || 'Home')
const op = ref<OverlayPanel>();

const navigateToProfile = () => {
  navigateTo('/profile')
}

const hasSettings = computed(() => {
  return route.path.includes('/profile')
})

const toggleOverlay = (event: Event) => {
  op.value?.toggle(event);
}
</script>


<template>
  <header class="navbar">
    <h1 class="text-xl font-bold">{{ title }}</h1>

    <div class="profile-block">
      <div v-if="!hasSettings" class="user" @click="navigateToProfile">
        <h2>Amillo</h2>
        <img
          src="https://tanecooil.ru/assets/images/man.webp"
          class="w-[35px] h-[35px] rounded-full object-contain"
          alt="algorithmic user profile">
      </div>

      <Icon v-else name="mdi:cog-outline" class="cursor-pointer text-lg" @click="toggleOverlay"/>

      <Avatar v-badge.danger="4">
        <template #icon>
      <NuxtLink to="/profile/notifications">
        <Icon name='mdi:bell-outline' class="text-lg"/>
      </NuxtLink>
        </template>
      </Avatar>
    </div>

    <OverlayPanel ref="op">
      <UserPanel @close="toggleOverlay"/>
    </OverlayPanel>

  </header>
</template>


<style lang="scss" scoped>
.navbar {
  @apply px-4 h-[70px] shadow-custom-light pr-10 py-3 flex justify-between items-center ;
  .profile-block {
    @apply flex text-primary items-center gap-2;
    .user {
      @apply flex items-center gap-2 cursor-pointer;
    }

    .user-panel {
      .title {
        @apply text-slate-500 leading-tight;
      }

      .user {
        @apply w-[50px] h-[50px] rounded-full object-cover;
      }
    }
  }
}
</style>
