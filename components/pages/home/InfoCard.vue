<script setup lang="ts">

</script>

<template>
  <div class="info-card">
    <Avatar size="large" class="bg-slate-400">
      <template #icon>
        <Icon name="mdi:account" class="text-2xl text-white"/>
      </template>
    </Avatar>

    <div class="info">
      <h1 class="title">All Users</h1>
      <div class="flex items-center gap-2">
        <h2 class="font-bold">1,200</h2>
        <span class="text-teal-300 text-xs">+20%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  @apply bg-white w-full flex gap-2 p-3 rounded-xl shadow-custom-light;
  .info{
    @apply flex flex-col justify-between;
    .title{
      @apply text-slate-400 m-0 text-sm;
    }
  }
}
</style>
