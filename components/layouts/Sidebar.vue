<script setup lang="ts">
import {defineProps, defineEmits} from 'vue'
import {pages} from '~/statics/mainPages'

const props = defineProps<{
  collapsed: boolean
}>()
const emit = defineEmits(['toggle'])


</script>

<template>
  <aside
    :class="[
      'sidebar',
      props.collapsed ? 'w-24' : 'w-[270px]'
    ]"
  >

    <NuxtLink to="/home" class="sidebar__logo">
      <NuxtImg
        src="/images/algo-logo.svg"
        class="logo"
      />
      <div>
        <h1 v-if="!props.collapsed" class="title">Algorithmic</h1>
      </div>

      <div class="flex text-slate-400 ">
        <button @click="emit('toggle')">
          <Icon
            name="mdi:arrow-left"
            :class="['transition-transform', props.collapsed ? 'rotate-180' : '']"
            class="text-lg"
          />
        </button>
      </div>
    </NuxtLink>

    <!-- Navigation Links -->
    <nav class="nav-block">
      <div>
        <NuxtLink
          v-for="(link, index) in pages"
          :key="link.name"
          :to="link.path"
          :exact-active-class="'active'"
          class="nav-block__link"
          :class="[index === 0 ? 'mt-5' : 'mt-2']"

        >
          <div class="nav-block__icon">
            <Icon :name="link.icon" class="text-base"/>
          </div>
          <span v-if="!collapsed">{{ link.name }}</span>
        </NuxtLink>
      </div>

      <NuxtLink class="logout" to="/">
        <div class="icon-block">
          <Icon name="mdi:logout" class="rotate-180  text-sm"/>
        </div>
        <span class="text">  Log out</span>
      </NuxtLink>
    </nav>

  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply h-full px-4 pr-2  border-r border-r-white transition-all  duration-300;
  &__logo {
    @apply flex  gap-2 pb-1 items-center pl-4 pt-3 mt-4;
    .logo {
      @apply w-[45px] h-[45px];
    }

    .title {
      @apply text-lg text-slate-500 font-semibold m-0 ;
    }
  }

  .nav-block {
    @apply flex  justify-between  flex-col  gap-2 px-2;
    height: calc(100vh - 100px);

    &__link {
      @apply flex items-center gap-3 hover:bg-slate-50  p-3  rounded-xl text-sm text-slate-400  transition;
    }

    &__icon {
      @apply flex   text-sm items-center justify-center w-[30px] h-[30px] rounded-lg bg-white text-primary;
    }

    a.active .nav-block__icon {
      @apply bg-primary text-white;
    }

    .logout {
      @apply mb-3   transition-all rounded-lg flex gap-3 items-center text-slate-400 text-sm pl-2.5 ;
      .icon-block {
        @apply bg-white transition-all rounded-lg w-[30px] h-[30px] flex items-center justify-center shadow-sm;
      }
      &:hover{
        .icon-block{
          @apply text-primary;
        }
        .text{
          @apply text-primary;
        }
      }
    }
  }

  .active {
    @apply bg-slate-50 font-semibold text-slate-500;
  }
}
</style>
