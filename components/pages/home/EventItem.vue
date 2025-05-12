<script setup lang="ts">

</script>

<template>
  <div class="event-item">
    <div class="event-item__shape"/>
    <div class="event-item__time">
      <h1 class="title">8:30 AM</h1>
      <h2>Contest : “Salom Dasturchilar”</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-item{
  @apply flex gap-4 items-center mt-3;
  &__shape{
    @apply w-[12px] h-[12px] bg-primary rounded-full;
  }
  &__time{
    @apply flex flex-col;
    .title{
      @apply text-base text-slate-400 font-bold m-0;
    }
    .description{
      @apply font-bold text-sm m-0;
    }
  }
}
</style>
