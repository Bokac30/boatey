<template>
  <div>
    <dashboard-chart />
    <dashboard-table />
  </div>
</template>
<script>

import DashboardTable from './DashboardTable'
import DashboardChart from './Chart'

export default {
  name: 'Dashboard',
  components: {
    DashboardTable,
    DashboardChart
  },
  data () {
    return {}
  },
  mounted () {
  },
  created () {
  }
}
</script>
<style scoped>

</style>
