<template>
  <div>
    <div>
      <b-form-group label="Radios using sub-components">
        <b-form-radio-group id="radios2" v-model="layoutAngle" name="radioSubComponent" @change="debounceChange">
          <b-form-radio value="0">Angle at 0 degrees</b-form-radio>
          <b-form-radio value="90">Angle at 90 degrees</b-form-radio>
          <b-form-radio value="180">Angle at 180 degrees</b-form-radio>
          <b-form-radio value="360">Angle at 360 degrees</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    </div>
    <div>
      Angle: {{layoutAngle}} and change event: {{fired}}
    </div>
    <div id='myDiagramDiv' style='border: solid 1px #ccc; width:100%; height:300px'></div>
  </div>
</template>
<script>
import _ from 'lodash'
import EventBus from '../../event-bus'

export default {
  name: 'DashboardChart',
  data () {
    return {
      diagram: {},
      layoutAngle: 0,
      fired: ''
    }
  },
  methods: {

    nodeClick: (event, object) => {
      console.log(object.part.data)
      EventBus.$emit('NODE_SELECTED', object.part.data.name)
    },

    changeAngle: () => {
      let angle = this.layoutAngle
      let myDiagram = this.diagram
      myDiagram.startTransaction('change Layout')
      let lay = myDiagram.layout

      angle = parseFloat(angle, 10)
      lay.angle = angle
      myDiagram.commitTransaction('change Layout')

      this.fired = new Date().toLocaleTimeString()
      console.log(angle)
    },

    debounceChange: _.debounce(function () {
      let angle = this.layoutAngle
      let myDiagram = this.diagram
      myDiagram.startTransaction('change Layout')
      let lay = myDiagram.layout

      angle = parseFloat(angle, 10)
      lay.angle = angle
      myDiagram.commitTransaction('change Layout')

      this.fired = new Date().toLocaleTimeString()
      console.log(angle)
    }, 500)
  },

  mounted () {
    var $ = go.GraphObject.make
    var myDiagram = $(go.Diagram, 'myDiagramDiv', {
      initialAutoScale: go.Diagram.UniformToFill,
      layout: $(go.TreeLayout, { comparer: go.LayoutVertex.smartComparer })
    })

    // the template we defined earlier
    myDiagram.nodeTemplate = $(go.Node, 'Vertical', { background: '#fff', click: this.nodeClick },
      $(go.Picture, { margin: 5, width: 50, height: 50, background: 'white' }, new go.Binding('source'))
      // $(go.TextBlock, 'foo', { margin: 10, stroke: 'black', font: 'bold 16px sans-serif' }, new go.Binding('text', 'name'))
    )

    // define the Group template to be fairly simple
    myDiagram.groupTemplate = $(go.Group, 'Horizontal', { selectable: true },
      $(go.Panel, 'Vertical', { },
        $(go.Picture, { margin: 5, width: 50, height: 50, background: 'white' }, new go.Binding('source')),
        $(go.TextBlock, 'bar', { margin: 10, stroke: 'black', font: 'bold 16px sans-serif' }, new go.Binding('text', 'name'))
      ),
      $(go.Placeholder, { padding: 0 }),
      $('SubGraphExpanderButton', { alignment: go.Spot.TopLeft })
    )

    myDiagram.model.nodeDataArray =
    [
      { key: 1, isGroup: true, name: 'Supplier', source: '/static/sprites/supplier.jpg' },
      { key: 2, name: 'Manufactoring', source: '/static/sprites/factory.jpg' },
      { key: 3, name: 'Pallets', source: '/static/sprites/pallets.jpg' },
      { key: 4, name: 'Warehouse', source: '/static/sprites/warehouse.jpg' },
      { key: 5, name: 'Distribution', source: '/static/sprites/distribution.jpg' },
      { key: 6, name: 'External Warehouse', source: '/static/sprites/ext-warehouse.jpg' },
      { key: 7, group: 1, name: 'Cardbord Box', source: '/static/sprites/cardbox.jpg' }
    ]

    myDiagram.model.linkDataArray =
    [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 6 }
    ]

    this.diagram = myDiagram
  }
}
</script>
<style scoped>

</style>
