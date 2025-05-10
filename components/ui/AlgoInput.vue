<script setup lang="ts">
import InputText from 'primevue/inputtext';

import { toRefs } from 'vue'

const props = withDefaults(defineProps<{
  type?: string;
  placeholder?: string;
  variant?: 'filled' | 'outlined';
  name: string;
  invalid?: boolean;
}>(), {
  type: 'text',
  placeholder: 'Enter text here',
  variant: 'outlined',
  invalid: false
});

const { type, placeholder, variant, name, invalid } = toRefs(props);

const model = defineModel('modelValue', {
  type: String,
  default: ''
});
</script>

<template>

  <div class="algo-input" :class="{'border-red-400' : invalid}">
    <Icon
        :name
        class="text-2xl text-slate-400"
    />
    <InputText
        v-model="model"
        :type
        :placeholder
        :variant
        :invalid
        class="w-full"
    />
  </div>
</template>

<style lang="scss">
.algo-input {
  @apply flex items-center gap-1 border text-slate-500 transition rounded-lg px-2 focus-within:border-primary bg-white;
  .p-inputtext {
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

  }
}
</style>