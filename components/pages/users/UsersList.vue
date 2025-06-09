<script lang="ts" setup>

import AlgoInput from '~/components/ui/AlgoInput.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional

const searchUsername = ref('')

const products = ref([
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    rate: 5,
  },

  {
    id: 2,
    firstname: 'Abdulaziz',
    lastname: 'Abdukhalilzoda',
    rate: 5,
  },

  {
    id: 2,
    firstname: 'Sardor',
    lastname: 'Abdullayev',
    rate: 5,
  },

])

const columns = [
  { field: 'id', header: 'id', sortable: true },
  { field: 'firstname', header: 'Full name', sortable: false },
  { field: 'rate', header: 'Rate', sortable: false },
]
</script>

<template>
  <nav class="users">
    <AlgoInput v-model="searchUsername" placeholder="Search by username" name="mdi:magnify" />

    <DataTable  selectionMode="single"  stripedRows  :value="products" class="w-full mt-8">
      <Column
        :sortable="col.sortable"
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      >
        <template #body="slotProps">
          {{ slotProps.data[col.field] }}
        </template>
      </Column>
    </DataTable>
  </nav>
</template>

<style scoped lang="scss">
.users {
  @apply rounded-xl;
}
</style>
