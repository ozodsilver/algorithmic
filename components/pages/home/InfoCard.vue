<script setup lang="ts">
const {title, icon, count, percentage} = defineProps<{
  title: string
  icon: string
  count: number
  percentage: number
}>()
</script>

<template>
  <div class="info-card">
    <Avatar size="large" class="bg-slate-400">
      <template #icon>
        <Icon :name="icon" class="text-2xl text-white"/>
      </template>
    </Avatar>

    <div class="info">
      <h1 class="title">{{title}}</h1>
      <div class="flex items-center gap-2">
        <h2 class="font-bold">{{count}}</h2>
        <span class="text-teal-300 text-xs font-bold">+{{percentage}}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  @apply bg-white w-full transition  hover:shadow-xl hover:scale-[1.1] hover:translate-y-[-5px] flex gap-2 p-3 rounded-xl shadow-custom-light;
  .info {
    @apply flex flex-col justify-between;
    .title {
      @apply text-slate-400 m-0 text-sm;
    }
  }
}
</style>
