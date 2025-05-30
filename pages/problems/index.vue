<script setup lang="ts">
import Filters from '~/components/pages/problems/Filters.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';


definePageMeta({
  title: 'Problems'
})

const products = ref([{
  status: 'A',
  id: 1,
  title: 'A+B',
  difficulty: 10,
  duration: '1h 30m',
  author: 'Sardor Salimov'
},

{
  status: 'D',
  id: 2,
  title: 'Reverse Integer',
  difficulty: 20,
  duration: '2h 30m',
  author: 'Abdulaziz Abdukhalilzoda'
},
{
  status: 'D',
  id: 3,
  title: 'Palindrome Number',
  difficulty: 30,
  duration: '1h 30m',
  author: 'Muzaffar Mirzayev'
},

{
  status: 'C',
  id: 4,
  title: 'Regular Expression Matching',
  difficulty: 40,
  duration: '1h 10m',
  author: 'Ozodxon Rabbanaqulov'
}
]);

</script>

<template>
  <div>
    <Filters/>
    <DataTable
paginator :rows="5" :rows-per-page-options="[5, 10, 20, 50]" show-gridlines striped-rows
               :value="products" class="w-full mt-5">
      <Column field="status" header="status" sortable style="width: 25%">
        <template #body="slotProps">

        <span v-if="slotProps.data.status === 'A'" class="text-sm font-semibold text-slate-600">
          <Icon name="mdi:check-all" class="text-xl text-teal-400"/>
        </span>

          <span v-else-if="slotProps.data.status === 'D'">
        <Icon name="mdi:minus-thick" class="text-slate-400"/>
        </span>

          <span v-else-if="slotProps.data.status === 'C'">
          <Icon name="mdi:close-thick" class="text-red-400"/>
        </span>
        </template>
      </Column>
      <Column field="id" header="Id" sortable style="width: 25%"/>
      <Column field="title" header="Title" style="width: 25%">
        <template #body="slotProps">
          <div class="flex gap-2">
            <Tag
              v-for="(item, index) in 3"
              :key="index"
              size="xl"
              rounded
              severity="secondary"
              value="Math"/>
          </div>
        </template>
      </Column>
      <Column field="difficulty" header="difficulty" style="width: 25%">
        <template #body="slotProps">
        <span class="text-sm font-semibold text-slate-600">
          {{ `${slotProps.data.difficulty}%` }}
        </span>
        </template>
      </Column>

      <Column field="author" header="author" style="width: 25%"/>
    </DataTable>
  </div>
</template>

<style lang="scss">

</style>
