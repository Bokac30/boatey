<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <dashboard-chart />
        <dashboard-table />
      </div>
      <div class="col-3">
        <distribution-map />
      </div>
    </div>
  </div>
</template>
<script>

import DashboardTable from './DashboardTable'
import DashboardChart from './Chart'
import DistributionMap from './DistributionMap'

export default {
  name: 'Dashboard',
  components: {
    DashboardTable,
    DashboardChart,
    DistributionMap
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
