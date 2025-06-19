<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch'
const colorMode = useColorMode()

const checked = ref(false)

const toggleDarkMode = () => {
  colorMode.preference = checked.value ? 'dark' : 'light'
}

onMounted(() => {
  checked.value = colorMode.preference === 'dark'
})
</script>

<template>
  <div class="site-configuration">
    <div class="site-configuration__mode">
      <InputSwitch id="dark-mode" v-model="checked" @change="toggleDarkMode" />
      <label for="dark-mode">Dark mode</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-configuration {
&__mode{
  @apply flex items-center gap-2;
}
}
</style>
