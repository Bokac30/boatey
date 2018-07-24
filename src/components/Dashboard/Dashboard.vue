<template>
  <div>
    <div class="row">
      <div class="col-12 bg-light">
        <div class="p-2 value-chain-header">
          <h3>
            <img src="/static/images/value-chain-icon.jpg" />
            Value Chain Traceability
          </h3>
          <small>
            Value Chain Traceability solution collects all Critical Tracking Events of your products at Item / Batch / Pallete level to give you  a real-time visualization of your supply chain.
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-12">
        <dashboard-chart />
        <dashboard-table />
      </div>
      <div class="col-md-3 col-sm-12">
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
  .value-chain-header {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
</style>
