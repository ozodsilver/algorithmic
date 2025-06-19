import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRootStore = defineStore('root', () => {
  const dark = ref(false)
  
  const toggleDark = () => {
    dark.value = !dark.value
  }

  return {
    dark,
    toggleDark
  }
})
