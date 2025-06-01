<script setup lang="ts">
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'
import Overview from '~/components/pages/profile/overview/Overview.vue';
import Submittions from '~/components/pages/profile/submittions/Submittions.vue';

definePageMeta({
  layout: 'default',
  title: 'Welcome Roy Hall'
})

</script>


<template>

  <div class="profile-tabs">

    <TabGroup>
      <TabList  class="list">

        <Tab v-slot="{selected}">
          <button class="tab" :class="{'selected-tab' : selected}">
            <Icon name="mdi:account" />
            Overview
          </button>
        </Tab>

        <Tab v-slot="{selected}">
          <button class="tab" :class="{'selected-tab' : selected}">
            <Icon name="mdi:account"/>
            Submittions
          </button>
        </Tab>

        <Tab class="tab">
          <Icon name="mdi:sort-bool-descending-variant" />
          Problems
        </Tab>
      </TabList>


      <TabPanels class="mt-14">
        <TabPanel>
          <Overview/>
        </TabPanel>
        <TabPanel>
          <Submittions/>
        </TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>


    </TabGroup>
  </div>

</template>


<style lang="scss" scoped>

.profile-tabs {
  @apply mt-5;
  .tab {
    @apply text-slate-500 outline-0 flex px-2 py-1 gap-2 text-sm items-center;
  }

  .selected-tab {
    @apply bg-white rounded-lg text-primary outline-0 font-semibold shadow-custom-light px-2 py-1 gap-2 flex items-center;
  }

  .list {
    @apply flex justify-end gap-5   items-center mt-5;
  }
}

</style>
