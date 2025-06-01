<script setup lang="ts">

import PersonalData from '~/components/pages/profile/edit-profile/PersonalData.vue';
import Privacy from '~/components/pages/profile/edit-profile/Privacy.vue';

definePageMeta({
  title: 'Edit Profile',
})


</script>

<template>
  <section class="edit-profile">
    <PersonalData/>
    <Privacy/>
  </section>
</template>

<style scoped lang="scss">
.edit-profile {
  @apply  rounded-lg  ;
}
</style>
