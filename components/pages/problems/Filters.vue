<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import AlgoInput from '~/components/ui/AlgoInput.vue';

const selectedCity = ref();
const cities = ref([
  {name: 'todo', code: 'NY'},
  {name: 'solved', code: 'RM'},
  {name: 'attempted', code: 'LDN'},
]);

const search = ref('')
</script>

<template>
  <div class="problems-filter">
    <AlgoInput
      v-model="search"
      name="mdi:magnify"
      placeholder="type here.."
      class="w-2/4"
    />
    <div class="flex gap-5">
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        option-label="name"
        placeholder="status"/>

      <Dropdown
        v-model="selectedCity"
        :options="cities"
        option-label="name"
        placeholder="difficulty"/>

      <Dropdown
        v-model="selectedCity"
        :options="cities"
        option-label="name"
        placeholder="tags"/>

      <Dropdown
        v-model="selectedCity"
        :options="cities"
        option-label="name"
        placeholder="author"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.problems-filter {
  @apply flex items-center justify-between gap-3;
}
</style>
