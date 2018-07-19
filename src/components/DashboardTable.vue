<template>
  <div class="m-1">
    <h3> <span class="hand">[-]</span> TRACK & TRACE - DETAILS</h3>
    <b-table :fields="fields" :items="items">
      <template slot="name" slot-scope="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
          {{data.value}}
        </a>
      </template>
      <template slot="actions-button" slot-scope="data">
        <button class="btn">{{data.value}}</button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'DashboardTable',
  data () {
    return {
      fields: [
        {
          key: 'event',
          label: 'EVENT'
        },
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'name',
          label: 'STAKEHOLDER',
          formatter: 'fullName'
        },
        {
          key: 'location',
          label: 'LOCATION'
        },
        {
          // A regular column with custom formatter
          key: 'date',
          label: 'DATE',
          formatter: (value) => { return value.charAt(0).toUpperCase() }
        },
        // A regular column
        'time',
        {
          // A virtual column with custom formatter
          key: 'actions-button',
          label: '',
          formatter: (value, key, item) => {
            return (new Date()).getFullYear() - item.time
          }
        }
      ],
      items: [
        { event: 'test', location: 'foo', name: { first: 'John', last: 'Doe' }, date: 'Male', time: 42 },
        { event: 'test', location: 'foo', name: { first: 'Jane', last: 'Doe' }, date: 'Female', time: 36 },
        { event: 'test', location: 'foo', name: { first: 'Rubin', last: 'Kincade' }, date: 'male', time: 73 },
        { event: 'test', location: 'foo', name: { first: 'Shirley', last: 'Partridge' }, date: 'female', time: 62 }
      ]
    }
  },
  methods: {
    fullName (value) {
      return `${value.first} ${value.last}`
    }
  }
}
</script>

<style scoped>

</style>
