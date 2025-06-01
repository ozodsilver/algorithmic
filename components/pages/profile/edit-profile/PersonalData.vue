<script setup lang="ts">
import AlgoInput from '~/components/ui/AlgoInput.vue';
import InputMask from 'primevue/inputmask';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

const formData = reactive({
  firstname: '',
  lastname: '',
  username: '',
  phone: '',
  region: '',
  city: '',
  district: '',
  study: ''
})

const cities = [
  {
    name: 'Samarkand',
    value: 'skd'
  }
]
</script>

<template>
  <div class="personal-info">
    <div class="personal-info__header">
      <h1 class="title">Personal Data</h1>
    </div>

    <form class="form-container">
      <div class="col-span-6">
        <label class="input-label" for="firstname">Firstname</label>
        <AlgoInput id="firstname" v-model="formData.firstname" name="mdi:account" placeholder="firstname" />
      </div>

      <div class="col-span-6">
        <label class="input-label" for="lastname">Lastname</label>
        <AlgoInput id="lastname" v-model="formData.lastname" name="mdi:account" placeholder="lastname" />
      </div>

      <div class="col-span-6">
        <label class="input-label" for="username">Username</label>
        <AlgoInput id="username" v-model="formData.username" name="mdi:email" placeholder="username" />
      </div>

      <div class="col-span-6">
        <label class="input-label" for="phone">Phone</label>
        <IconField icon-position="left">
          <InputIcon class="pi pi-phone" />
          <InputMask id="phone" v-model="formData.phone" class="w-full" mask="99-999-99-99" placeholder="phone" />
        </IconField>
      </div>

      <div class="col-span-6">
        <label class="input-label" for="region">Region</label>
        <Dropdown
          v-model="formData.city"
          size-sm
          class="w-full"
          :options="cities"
          option-label="name"
          placeholder="Select a City"
        >
          <template #dropdownicon>
            <Icon name="mdi:city-variant-outline" />
          </template>
        </Dropdown>
      </div>

      <div class="col-span-6">
        <label class="input-label" for="district">District</label>
        <Dropdown
          v-model="formData.district"
          size-sm
          class="w-full"
          :options="cities"
          option-label="name"
          placeholder="Select a district"
        >
          <template #dropdownicon>
            <Icon name="mdi:home-account" />
          </template>
        </Dropdown>
      </div>

      <div class="col-span-12">
        <label class="input-label" for="study">Study or workplace</label>
        <AlgoInput
          id="study"
          v-model="formData.study"
          name="mdi:book-education-outline"
          placeholder="Study or workplace"
        />
      </div>

      <div class="button-wrapper">
        <Button severity="primary" label="Submit" />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.personal-info {
  @apply border bg-slate-50 border-white rounded-lg overflow-hidden;
  &__header {
    @apply bg-slate-400 px-3 text-white;
    .title {
      @apply text-white m-0 text-lg font-semibold p-2;
    }
  }
}

.form-container {
  @apply p-4 grid grid-cols-12 gap-3 mt-3;
  .input-label {
    @apply block my-1 text-xs text-slate-400;
  }

  .button-wrapper {
    @apply flex justify-end col-span-12;
  }
}

</style>
