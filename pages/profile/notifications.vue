<script setup lang="ts">
import Panel from 'primevue/panel'

definePageMeta({
  title: 'Notifications',
})
</script>

<template>
  <div class="notifications">
    <Panel toggleable>
      <template #header>
        <span class="text-lg">New login detected</span>
      </template>
      <p class="m-0 text-sm  font-raleway">
        A new login has been detected. IP: <kbd class="text-red-400">213.230.86.0</kbd>, Device: <span
        class="text-red-500">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36</span>
      </p>


      <NuxtLink to="/profile/edit-profile" class="flex justify-end items-center gap-1 mt-4 text-slate-400">
        <Icon name="mdi:cog-outline" />
        <span class="text-sm">Settings</span>
      </NuxtLink>
    </Panel>
  </div>
</template>

<style scoped lang="scss">

</style>
