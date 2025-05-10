<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'


const props = defineProps<{
  collapsed: boolean
}>()
const emit = defineEmits(['toggle'])

const links = [
  { name: 'Orders', icon: 'mdi:login', to: '/orders' },
]
</script>

<template>
  <aside
      :class="[
      'bg-white h-full shadow-md transition-all duration-300',
      collapsed ? 'w-20' : 'w-64'
    ]"
  >
    <!-- Top Arrow -->
    <div class="flex justify-end p-2">
      <button @click="emit('toggle')">
        <Icon name="mdi:login"
            :class="['transition-transform', collapsed ? 'rotate-180' : '']"
            class="w-5 h-5"
        />
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="flex flex-col gap-2 px-2">
      <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition"
      >
        <component :is="link.icon" class="w-5 h-5" />
        <span v-if="!collapsed" class="whitespace-nowrap">{{ link.name }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
