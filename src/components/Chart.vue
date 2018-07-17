<template>
  <div>
    <div id="myDiagramDiv" style="border: solid 1px #ccc; width:100%; height:200px"></div>
  </div>
</template>
<script>
export default {
  name: 'DashboardChart',
  data () {
    return {}
  },
  mounted () {
    var $ = go.GraphObject.make;
    var myDiagram = $(go.Diagram, "myDiagramDiv",
      { "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
      layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                { angle: 90, layerSpacing: 35 })
    });

    // the template we defined earlier
    myDiagram.nodeTemplate = $(go.Node, "Horizontal",
      { background: "#fff" },
      $(go.Picture,
        { margin: 10, width: 50, height: 50, background: "white" },
        new go.Binding("source")),
      $(go.TextBlock, "Default Text",
        { margin: 12, stroke: "black", font: "bold 16px sans-serif" },
        new go.Binding("text", "name"))
    )

    var model = $(go.TreeModel);
    model.nodeDataArray =
    [
      { key: '1',              name: 'Supplier',   source: '../assets/sprites/supplier.jpg' },
      { key: '2', parent: '1', name: 'Manufactoring',   source: '../assets/sprites/factory.jpg' },
      { key: '3', parent: '2', name: 'Pallets',   source: '../assets/sprites/pallets.jpg' }
    ]
    myDiagram.model = model
  }
}
</script>
<style scoped>

</style>
