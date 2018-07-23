<template>
  <div>
    <div id='myDiagramDiv' style='border: solid 1px #ccc; width:100%; height:200px'></div>
  </div>
</template>
<script>
export default {
  name: 'DashboardChart',
  data () {
    return {}
  },
  mounted () {
    var $ = go.GraphObject.make
    var myDiagram = $(go.Diagram, 'myDiagramDiv')

    // the template we defined earlier
    myDiagram.nodeTemplate = $(go.Node, 'Vertical', { background: '#fff' },
      $(go.Picture, { margin: 5, width: 50, height: 50, background: 'white' }, new go.Binding('source')),
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

    myDiagram.model.linkDataArray = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 6 }
    ]
  }
}
</script>
<style scoped>

</style>
