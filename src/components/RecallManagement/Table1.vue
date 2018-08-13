<template>
  <div class="mt-2 data-table-light">
    <b-table :fields="fields" :items="items" :current-page="currentPage" :per-page="perPage" :small="true" :striped="true" :outlined="true">
      <template slot="selection" slot-scope="data">
        <b-form-checkbox v-model="selected" value="accepted">
        </b-form-checkbox>
      </template>
      <template slot="HEAD_name" slot-scope="data">
        <!-- A custom formatted header cell for field 'name' -->
        <span class="tbl-header">
          {{data.label}}
        </span>
      </template>
      <template slot="name" slot-scope="data">
        <b-row>
          <b-col md="2">
            <img :src="'/static/images/table/' + data.item.id + '.png'" width="25" height="40" />
          </b-col>
          <b-col md="10">
            <strong>{{data.value}}</strong>
            <br/>
            <span>{{data.item.company}}</span>
          </b-col>
        </b-row>
      </template>
      <template slot="task" slot-scope="row">
        <!-- <router-link :to="`/task/${row.item.id}`">
          {{row.item.task}}
        </router-link> -->
        {{row.item.task}}
      </template>
      <template slot="status" slot-scope="row">
        <h6>
          <span v-if="row.value === 4" class="p-1 status-col badge badge-danger">ISSUE</span>
          <span v-if="row.value === 3" class="p-1 status-col badge badge-warning">Ongoing</span>
          <span v-if="row.value === 2" class="p-1 status-col badge badge-success">In Review</span>
          <span v-if="row.value === 1" class="p-1 status-col badge badge-primary">Done</span>
        </h6>
      </template>
      <template slot="actions-button" slot-scope="data">
        <div>
          <button class="btn btn-light btn-sm" @click.stop="edit(data.value)">
            <awesome icon="edit" />
          </button>
          <button class="btn btn-light btn-sm" @click.stop="drop(data.value)">
            <awesome icon="trash-alt" />
          </button>
        </div>
      </template>
      <template slot="date" slot-scope="data">
        <span>
          {{data.value}}
        </span>
      </template>
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import tableData from '../models/TableData'

let fieldsData = [
  { key: 'selection', label: '', class: ['align-middle', 'justify-content-center'] },
  { key: 'name', label: 'NAME', formatter: 'fullName' },
  { key: 'task', label: 'TASK', formatter: 'taskFormatter', class: 'align-middle' },
  { key: 'date', label: 'DATE', formatter: (value, key, item) => { return new Date(value).toLocaleDateString() }, class: 'align-middle' },
  { key: 'status', label: 'STATUS', class: 'align-middle' },
  { key: 'actions-button', label: 'ACTION', formatter: (value, key, item) => { return item.id }, class: 'align-middle' }
]

export default {
  name: 'Table1',
  data () {
    return {
      items: tableData,
      totalRows: tableData.length,
      fields: fieldsData,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      selected: null
    }
  },
  methods: {
    edit (id) {
      alert(`you edited ${id} row`)
    },
    drop (id) {
      alert(`you droped ${id} row`)
    },
    fullName (value, key, item) {
      return `${value.first} ${value.last}`
    },
    taskFormatter (value, key, item) {
      return `<div class="taskClass">${item.task}</div>`
    }
  }
}
</script>

<style scoped>
.action-button {
  width: 100px;
  border-color: blue;
  font-size: 8pt;
}
.data-table-light {
  font-size: 9pt;
}
.status-col {
  width: 90px;
}
</style>
