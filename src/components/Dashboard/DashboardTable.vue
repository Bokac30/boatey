<template>
  <div class="mt-2 data-table-light">
    <div class="bg-light p-1">
      <h6>TRACK & TRACE - DETAILS</h6>
    </div>
    <b-table :fields="fields" :items="items" :small="true" :striped="true" :outlined="true">
      <template slot="HEAD_event" slot-scope="data">
        <!-- A custom formatted header cell for field 'name' -->
        <span class="tbl-header">
          {{data.label}}
        </span>
      </template>
      <template slot="event" slot-scope="data">
        <strong>{{data.value}}</strong>
      </template>
      <template slot="name" slot-scope="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
          {{data.value}}
        </a>
      </template>
      <template slot="stakeholder" slot-scope="row">
        <router-link :to="`/stakeholder/${row.item.id}`">
          {{row.item.stakeholder}}
        </router-link>
      </template>
      <template slot="actions-button" slot-scope="data">
        <div class="float-right">
<button class="btn btn-light action-button btn-sm">{{data.value}}</button>
        </div>

      </template>
      <template slot="date" slot-scope="data">
        <span>
          {{data.value}}
        </span>
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
          key: 'stakeholder',
          label: 'STAKEHOLDER',
          formatter: 'stakeholderLink'
          // formatter: (value, key, item) => {
          //   return `<router-link to="/${item.id}">${item.stakeholder}</router-link>`
          // }
        },
        // {
        //   // A column that needs custom formatting,
        //   // calling formatter 'fullName' in this app
        //   key: 'name',
        //   label: 'STAKEHOLDER',
        //   formatter: 'fullName'
        // },
        {
          key: 'location',
          label: 'LOCATION'
        },
        {
          // A regular column with custom formatter
          key: 'date',
          label: 'DATE',
          formatter: (value, key, item) => {
            return new Date(value).toLocaleDateString()
          }
        },
        // A regular column
        {
          key: 'time',
          label: 'TIME',
          formatter: (value, key, item) => {
            return new Date(item.date).toLocaleTimeString()
          }
        },
        {
          // A virtual column with custom formatter
          key: 'actions-button',
          label: '',
          formatter: (value, key, item) => {
            // return (new Date()).getFullYear() - item.action
            return item.action
          }
        }
      ],
      items: [
        { id: 1, stakeholder: 'Milk Supplier company', event: 'Suppliers received', location: 'Producer factory supply location', name: { first: 'John', last: 'Doe' }, date: new Date(), action: 'DETAILS' },
        { id: 2, stakeholder: 'Producer factory', event: 'Milk production', location: 'Production line: MPP A0X', name: { first: 'Jane', last: 'Doe' }, date: new Date().setDate(26), action: 'BATCH INFO' },
        { id: 3, stakeholder: 'Producer factory', event: 'Sampling item Lab Test', location: 'Factory Test Lab', name: { first: 'Rubin', last: 'Kincade' }, date: new Date().setDate(14), action: 'SEE RESULTS' },
        { id: 4, stakeholder: 'Producer factory', event: 'Packaging', location: 'Warehouse WHA1', name: { first: 'Shirley', last: 'Partridge' }, date: new Date().setDate(23), action: 'AGGREGATION' },
        { id: 5, stakeholder: 'Distributor Skåne', event: 'Distribution', location: 'Shipment to Distribution Warehouse: DCWH22', name: { first: 'Shirley', last: 'Partridge' }, date: new Date().setDate(8), action: 'SHIPMENT INFO' },
        { id: 6, stakeholder: 'Distributor Skåne', event: 'Milk Box to Retailer', location: 'From: DCWH22 to: Ica Maxi Västra Hamnen', name: { first: 'Shirley', last: 'Partridge' }, date: new Date().setDate(17), action: 'SHIPMENT INFO' },
        { id: 7, stakeholder: 'Ica Maxi Västra Hamnen', event: 'Box received by Retailer', location: 'Milk is at the Retailer', name: { first: 'Shirley', last: 'Partridge' }, date: new Date().setDate(21), action: 'DETAILS' }
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
  .action-button {
    width: 100px;
    border-color: blue;
    font-size: 8pt;
  }
  .data-table-light {
    font-size: 9pt;
  }
</style>
