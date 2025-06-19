<script setup lang="ts">
import User from '~/components/pages/profile/overview/User.vue'
import ProblemsSolvedProgress from '~/components/pages/profile/overview/ProblemsSolvedProgress.vue'
import Problems from '~/components/pages/profile/overview/Problems.vue'
</script>

<template>
  <div class="overview">
    <User class="col-span-4" />
    <ProblemsSolvedProgress class="col-span-8" />
    <Problems class="col-span-12" />
  </div>
</template>

<style scoped lang="scss">
.overview {
  @apply grid grid-cols-12 gap-8;
}
</style>
