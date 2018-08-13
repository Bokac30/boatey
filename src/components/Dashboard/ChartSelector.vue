<template>
  <div>
    <dash-chart v-if="option === 1" />
    <chart-1 v-if="option === 2" />
    <chart-3 v-if="option === 3" />
  </div>
</template>

<script>
import DashboardChart from './Chart'
import Chart1 from '../Chart1'
import Chart3 from '../Chart3'

export default {
  name: 'ChartSelector',
  components: {
    'chart-1': Chart1,
    'chart-3': Chart3,
    'dash-chart': DashboardChart
  },
  props: {
    option: Number
  },
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style>

</style>
