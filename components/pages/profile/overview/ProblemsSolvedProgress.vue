<script setup lang="ts">

import DonutChart from '~/components/common/DonutChart.vue';
</script>

<template>
  <div class="problem-solved">
    <h1 class="title">Problems Solved</h1>

  <div class="flex mt-6">
    <DonutChart/>
    <DonutChart/>
    <DonutChart/>
  </div>
  </div>
</template>

<style scoped lang="scss">
.problem-solved {
  @apply rounded-lg w-full bg-white p-4 shadow-custom-light ;
  .title{
    @apply text-center text-slate-600 m-0 text-lg font-semibold;
  }
}
</style>
