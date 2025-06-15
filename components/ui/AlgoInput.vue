<script setup lang="ts">
import InputText from 'primevue/inputtext'

import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: string
    placeholder?: string
    variant?: 'filled' | 'outlined'
    name?: string
    invalid?: boolean
    size?: string
    id?: string
    mask?: string
  }>(),
  {
    type: 'text',
    placeholder: 'Enter text here',
    variant: 'outlined',
    invalid: false,
    size: 'sm',
  }
)

const { type, placeholder, variant, invalid, id } = toRefs(props)

const model = defineModel('modelValue', {
  type: String,
  default: '',
})

const sizes = computed(() => {
  switch (props.size) {
    case 'sm':
      return ''
    case 'md':
      return 'h-[40px]'
    default:
      return ''
  }
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="algo-input" :class="{ 'border-red-400': invalid }">
    <Icon v-if="props.name" :name="props.name" class="text-2xl text-slate-400" />
    <InputText
      autocomplete="on"
      :id
      v-model="model"
      :type="type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type"
      :placeholder
      :variant
      :invalid
      class="w-full"
      :class="sizes"
    />

    <Icon
      v-if="type === 'password'"
      :name="isPasswordVisible ? 'mdi:eye-outline' : 'mdi:eye-off'"
      class="text-2xl text-slate-400 cursor-pointer"
      @click="isPasswordVisible = !isPasswordVisible"
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
