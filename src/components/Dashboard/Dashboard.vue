<template>
  <div>
    <div class="row">
      <div class="col-12 bg-light">
        <div class="p-2 value-chain-header">
          <div class="row">
            <div class="col-10">
              <h6>
                <img src="/static/images/value-chain-icon.jpg" />
                Value Chain Traceability
              </h6>
              <small>
                Value Chain Traceability solution collects all Critical Tracking Events of your products at Item / Batch / Pallete level to give you  a real-time visualization of your supply chain.
              </small>
            </div>
            <div class="col-2">
              <div class="float-right m-1">
                <span>Track & Trace</span>
                <img src="/static/sprites/packages.jpg" v-b-modal.modal1 />
              </div>
              <b-modal id="modal1" title="Modal Header">
                <p class="my-4">Modal content</p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-1 p-1 rounded dashboard-content">
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

  .dashboard-content {
    background-color: #fff;
  }

</style>
