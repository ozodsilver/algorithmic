<script setup lang="ts">
import Dock from 'primevue/dock';
const items = ref([
  {
    label: 'Finder',
    icon: 'mdi:facebook-box',
    link : '#'
  },
  {
    label: 'App Store',
    icon: 'mdi:instagram',
    link : '#'
  },
  {
    label: 'Photos',
    icon: 'mdi:telegram',
    link : '#'
  },
  {
    label: 'Trash',
    icon: 'mdi:github',
    link : '#'
  }
]);
</script>

<template>
  <div class="user">
    <div class="user__image-wrapper">
      <img
        class="image"
        src="https://static.tildacdn.com/tild6138-3337-4037-b333-366134626434/shutterstock_1727575.jpg" alt="">
    </div>
    <h1 class="title">Roy hall</h1>
    <h2 class="username">@roy_hall</h2>
    <div class="socials">

      <Dock :model="items">
        <template #icon="{ item }">
          <a href="#">
            <Icon :name="`${item.icon}`" class="text-lg" />
          </a>
        </template>
      </Dock>

<!--      <a href="#">-->
<!--        <Icon name="mdi:facebook-box" class="icon"/>-->
<!--      </a>-->
<!--      <Icon name="mdi:instagram" class="icon"/>-->
<!--      <Icon name="mdi:telegram" class="icon"/>-->
<!--      <Icon name="mdi:github" class="icon"/>-->
    </div>

    <div class="bottom-panel">
      <div class="items">
        <div class="gap-2 flex items-center">
          <Icon name="mdi:account-supervisor"/>
          <span class="text-base">Place: 77777</span>
        </div>

        <div class="gap-2 flex items-center">
          <Icon name="mdi:google-analytics"/>
          <span class="text-base">Rating: 77777</span>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.user {
  @apply w-full shadow-custom-light  rounded-lg  relative bg-white ;
  &__image-wrapper {
    @apply w-[140px] absolute -top-16 left-2/4 -translate-x-2/4 p-2 bg-white rounded-full   mx-auto ;
    .image {
      @apply rounded-full w-[140px] object-cover h-full rounded-full  border-4 border-white;
    }
  }

  .title {
    @apply text-xl font-bold text-center m-0 pt-24;
  }

  .username {
    @apply text-center mt-2 text-slate-400 m-0 text-sm;
  }

  .socials {
    @apply flex justify-center gap-4 mt-3  w-2/4 mx-auto ;
    .icon {
      @apply text-xl text-slate-500;
    }
  }

  .bottom-panel {
    @apply w-full mt-5 absolute bottom-0 bg-slate-400 h-[50px] rounded-br-lg rounded-bl-lg p-2 px-4 flex justify-between items-center;
    .items {
      @apply flex gap-2 justify-between  w-full items-center text-white text-xl;
    }
  }

}
</style>
