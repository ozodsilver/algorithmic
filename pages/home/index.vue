<script setup lang="ts">
import InfoCard from '~/components/pages/home/InfoCard.vue';

definePageMeta({
  title: 'Welcome To Algorithmic.uz'
})
</script>

<template>
  <div class="home">
   <InfoCard/>
   <InfoCard/>
   <InfoCard/>
  </div>
</template>

<style scoped lang="scss">
.home{
@apply flex gap-3 justify-between;
}
</style>
