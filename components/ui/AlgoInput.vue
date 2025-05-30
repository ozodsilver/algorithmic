<script setup lang="ts">
import InputText from 'primevue/inputtext'

import {toRefs} from 'vue'

const props = withDefaults(defineProps<{
  type?: string;
  placeholder?: string;
  variant?: 'filled' | 'outlined';
  name?: string;
  invalid?: boolean;
  size?: string
}>(), {
  type: 'text',
  placeholder: 'Enter text here',
  variant: 'outlined',
  invalid: false,
  size: 'sm'
})

const {type, placeholder, variant, name, invalid} = toRefs(props);

const model = defineModel('modelValue', {
  type: String,
  default: ''
})

const sizes = computed(() => {
  switch (props.size) {
    case 'sm':
      return '';
    case 'md':
      return 'h-[40px]';
    default:
      return '';
  }
});
</script>

<template>

  <div class="algo-input" :class="{'border-red-400' : invalid}">
    <Icon
      v-if="props.name"
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
      :class="sizes"
    />
  </div>
</template>

<style lang="scss">
.algo-input {
  @apply flex items-center gap-1  text-slate-500 transition rounded-lg px-2 focus-within:border-primary bg-white;
  .p-inputtext {
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

  }
}
</style>
