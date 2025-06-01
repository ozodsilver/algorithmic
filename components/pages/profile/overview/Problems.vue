<script setup lang="ts">

</script>

<template>
  <div class="problems">
    <h1 class="title"> Problems </h1>
    <div class="problems-items">
      <NuxtLink v-for="(item, index) in 100" :key="index" to="/" class="problems-items__item" :class="index % 2 === 0 ? 'bg-teal-400' : 'bg-slate-400' ">
        00{{ index + 1 }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.problems {
  @apply bg-white p-4 rounded-xl;
  .title {
    @apply text-center text-slate-600 m-0 text-lg font-semibold mb-3;
  }

  &-items {
    @apply  w-full flex-wrap gap-2 flex  rounded-lg;
    &__item{
      @apply w-fit text-center  rounded-lg px-3 py-2  text-white ;
    }
  }
}
</style>
