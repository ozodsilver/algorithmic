<template>
  <Toast />
  <Suspense>
    <template #default>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>

    <template #fallback>
      <div class="flex items-center justify-center h-screen text-slate-500">
        <span class="animate-pulse">Loading page...</span>
      </div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
</script>
