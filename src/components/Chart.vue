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
    var myDiagram = $(go.Diagram, 'myDiagramDiv',
      { 'undoManager.isEnabled': true, // enable Ctrl-Z to undo and Ctrl-Y to redo
        layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
          { angle: 0, layerSpacing: 35 })
      })

    // the template we defined earlier
    myDiagram.nodeTemplate = $(go.Node, 'Horizontal',
      { background: '#fff' },
      $(go.Picture,
        { margin: 5, width: 50, height: 50, background: 'white' },
        new go.Binding('source')),
      $(go.TextBlock, 'Default Text',
        { margin: 10, stroke: 'black', font: 'bold 16px sans-serif' },
        new go.Binding('text', 'name'))
    )

    // // define the Group template to be fairly simple
    // myDiagram.groupTemplate =
    //   $(go.Group, 'Auto',
    //     {
    //       selectable: false,
    //       layout: $(ParallelLayout, { layerSpacing: 20, nodeSpacing: 10 })
    //     },
    //     $(go.Shape, { fill: 'transparent', stroke: 'darkgoldenrod' }),
    //     $(go.Placeholder, { padding: 10 }),
    //     $('SubGraphExpanderButton', { alignment: go.Spot.TopLeft })
    //   )

    var model = $(go.TreeModel)
    model.nodeDataArray =
    [
      { key: '1', name: 'Supplier', source: '/static/sprites/supplier.jpg' },
      { key: '2', parent: '1', name: 'Manufactoring', source: '/static/sprites/factory.jpg' },
      { key: '3', parent: '2', name: 'Pallets', source: '/static/sprites/pallets.jpg' },
      { key: '4', parent: '3', name: 'Warehouse', source: '/static/sprites/warehouse.jpg' },
      { key: '5', parent: '4', name: 'Distribution', source: '/static/sprites/distribution.jpg' },
      { key: '6', parent: '5', name: 'External Warehouse', source: '/static/sprites/ext-warehouse.jpg' },
      { key: '7', parent: '2', name: "Cardbord Box", source: '/static/sprites/cardbox.jpg' }
    ]
    myDiagram.model = model
  }
}
</script>
<style scoped>

</style>
