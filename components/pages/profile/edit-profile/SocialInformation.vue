<script setup lang="ts">
import Textarea from 'primevue/textarea';
import AlgoInput from '~/components/ui/AlgoInput.vue';

const formData = reactive({
  biography: '',
  telegram: '',
  facebook: '',
  linkedin: '',
  github: '',
  youtube:''
});


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
      <Textarea
        id="bio"
        v-model="formData.biography"
        class="block w-full"
        rows="10"
        cols="30"/>

      <div class="social__content__icons">
        <AlgoInput
          v-model="formData.telegram"
          name="mdi:telegram"
          placeholder="Telegram username"
          class="col-span-4"
        />

        <AlgoInput
          v-model="formData.facebook"
          name="mdi:facebook"
          placeholder="Facebook"
          class="col-span-4"
        />

        <AlgoInput
          v-model="formData.linkedin"
          name="mdi:linkedin"
          placeholder="Linkedin"
          class="col-span-4"
        />

        <AlgoInput
          v-model="formData.github"
          name="mdi:github"
          placeholder="Github"
          class="col-span-4"
        />

        <AlgoInput
          v-model="formData.youtube"
          name="mdi:github"
          placeholder="Youtube"
          class="col-span-4"
        />
      </div>
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

    &__icons {
      @apply p-4 px-0 grid grid-cols-12 gap-3 mt-3;
    }
  }


}
</style>
