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
            <!-- Popup modal -->
            <div class="col-2">
              <div class="float-right m-1">
                <img src="/static/sprites/ttIcon.png" v-b-modal.modal1 />
              </div>
              <b-modal id="modal1" title="Track and trace" @ok="okClick">
                <div class="container-fluid">
                  <b-form-select v-model="ddlSelected" :options="ddlOptions" class="mb-3" />
                  <div class="row mb-2">
                    <div class="col-md-4">
                      <label for="input_1">Manufacturing Time:</label>
                    </div>
                    <div class="col-md-8">
                      <b-form-input id="input_1"></b-form-input>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-md-4">
                      <label for="input_2">Primary package ID:</label>
                    </div>
                    <div class="col-md-8">
                      <b-form-input id="input_2"></b-form-input>
                    </div>
                  </div>
                    <div class="row mb-2">
                      <div class="col-md">
                        <label for="input_3"><img src="/static/images/ttImage2.jpg" /> If you have a QR code reader, you can scan the the QR code to identify the package!</label>
                      </div>
                    </div>
                </div>
              </b-modal>
            </div>
            <!-- Popup modal -->
          </div>
        </div>
      </div>
    </div>
    <div class="row m-1 p-1 rounded dashboard-content">
      <div class="col-md-9 col-sm-12">
        <chart-selector :option="showOption" />
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
import ChartSelector from './ChartSelector'
import DistributionMap from './DistributionMap'

export default {
  name: 'Dashboard',
  components: {
    DashboardTable,
    ChartSelector,
    DistributionMap
  },
  data () {
    return {
      ddlSelected: null,
      showOption: 1,
      ddlOptions: [
        { value: null, text: 'Please select an entity' },
        { value: 1, text: 'Primary package' },
        { value: 2, text: 'Pallet' },
        { value: 3, text: 'Batch' }

      ]
    }
  },
  methods: {
    okClick () {
      // alert(`selected option: ${this.ddlSelected}`)
      this.showOption = this.ddlSelected
    }
  },
  mounted () {},
  created () {}
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
