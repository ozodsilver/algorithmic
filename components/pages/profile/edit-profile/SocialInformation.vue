<script setup lang="ts">
import Textarea from 'primevue/textarea';

const biography = ref('')
</script>

<template>
  <section class="social">
    <header class="social__header">
      <h1 class="title">
        Social information
      </h1>
    </header>

    <div class="social__content">
      <label for="bio">Biografiya</label>
      <Textarea id="bio" v-model="biography" class="block w-full" rows="10" cols="30"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social {
  @apply edit-profile-section mt-6;
  &__header {
    @apply edit-profile-section-header;
    .title {
      @apply text-white m-0 text-lg font-semibold p-2;
    }
  }

  &__content {
    @apply p-4 bg-white pt-8 rounded-lg;
    label {
      @apply block text-slate-600 mb-2;
    }
    .p-textarea {
      @apply w-full;
    }
  }
}
</style>
