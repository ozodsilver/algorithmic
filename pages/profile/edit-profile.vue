<script setup lang="ts">

import PersonalData from '~/components/pages/profile/edit-profile/PersonalData.vue';
import Privacy from '~/components/pages/profile/edit-profile/Privacy.vue';
import SocialInformation from '~/components/pages/profile/edit-profile/SocialInformation.vue';

definePageMeta({
  title: 'Edit Profile',
})


</script>

<template>
  <section class="edit-profile">
    <PersonalData/>
    <Privacy/>
    <SocialInformation/>
  </section>
</template>

<style scoped lang="scss">
.edit-profile {
  @apply rounded-lg  ;
}
</style>
