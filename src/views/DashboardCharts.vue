<template>
  <div>
    <div class="row">
      <div class="col-12 bg-light">
        <div class="p-2 value-chain-header">
          <div class="row">
            <div class="col-md">
              <h6>
                <img src="/static/images/value-chain-icon.jpg" />
                Recall Management
              </h6>
              <small>
                Recall Management solution collects all Critical Tracking Events of your products at Item / Batch / Pallete level to give you  a real-time visualization of your supply chain.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <top-cards />
    </div>
    <div class="row m-1 p-1 rounded dashboard-content">
      <div class="col-md-3 col-sm-12">
        <side-charts />
      </div>
      <div class="col-md-9 col-sm-12">
        <world-map />
        <dashboard-table />
      </div>
    </div>
  </div>
</template>
<script>

import DashboardTable from '@/components/RecallManagement/Table'
import SideCharts from '@/components/RecallManagement/SideCharts'
import WorldMap from '@/components/RecallManagement/WorldMap'
import TopCards from '@/components/RecallManagement/Cards'

export default {
  name: 'DashboardCharts',
  components: {
    DashboardTable,
    SideCharts,
    WorldMap,
    TopCards
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

  .dashboard-content {
    background-color: #fff;
  }

</style>
