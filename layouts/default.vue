<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '~/components/layouts/Sidebar.vue'
import Navbar from '~/components/layouts/navbar/Navbar.vue'

const collapsed = ref(false)
const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="flex h-screen bg-gray-100  text-gray-900">
    <!-- Sidebar -->
    <Sidebar :collapsed="collapsed" @toggle="toggleSidebar" />

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <Navbar />

      <!-- Page content -->
      <main class="flex-1 p-4 overflow-auto">
        <Transition name="fade" mode="out-in">
          <slot />
        </Transition>
      </main>
    </div>
  </div>
</template>
