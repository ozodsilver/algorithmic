<script setup lang="ts">

</script>

<template>
  <div class="user-panel">
    <section class="user">
      <img
        src="https://static.tildacdn.com/tild6138-3337-4037-b333-366134626434/shutterstock_1727575.jpg"
        alt="algorithmic user profile"
        class="image">

      <div class="info">
        <h1 class="title">Roy Hall</h1>
        <h2 class="username">@roy_hall</h2>
      </div>
    </section>

    <section class="main">
      <div class="main__block">

        <NuxtLink to="/profile/edit-profile" class="item">
          <Icon name="mdi:information-slab-circle-outline" class=" text-lg"/>
          <span class="item">Edit Profile</span>
        </NuxtLink>

        <div class="item">
          <Icon name="mdi:security-network" class="text-lg"/>
          <span class="item">Privacy and Security</span>
        </div>

        <div class="item">
          <Icon name="mdi:map-marker" class="text-lg"/>
          <span class="item">Location</span>
        </div>

        <div class="item">
          <Icon name="mdi:server-network" class="text-lg"/>
          <span class="item">Social networks</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.user-panel {
  @apply gap-4 pt-0 p-3 w-[400px];

  .user {
    @apply flex items-center gap-4;
    .image {
      @apply w-[90px] h-[90px] mt-4 shadow border rounded-full object-cover;
      object-position: 50% 20%;
    }

    .info {
      .title {
        @apply text-lg font-semibold m-0;
      }

      .username {
        @apply text-slate-400 m-0 text-sm;
      }
    }
  }


  .main {
    @apply mt-4  border-t border-t-slate-50 pt-4;
    &__block {
      @apply flex flex-col  w-full gap-1  cursor-pointer pr-3  rounded-lg transition  text-slate-400  ;
      .item {
        @apply flex items-center px-2 hover:bg-slate-100 py-1 rounded-lg   text-sm;
      }
    }
  }
}
</style>
