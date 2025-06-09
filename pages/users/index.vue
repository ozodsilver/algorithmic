<script lang="ts" setup>
import UsersList from '~/components/pages/users/UsersList.vue';

definePageMeta({
  title: 'Users'
})
</script>

<template>
  <nav class="users">
  <UsersList/>
  </nav>
</template>

<style scoped lang="scss">
.users{
  @apply  rounded-xl;
}
</style>
