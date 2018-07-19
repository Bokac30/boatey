<template>
  <div>
    <div id="myDiagramDiv" style='border: solid 1px #ccc; width:100%; height:200px'></div>
  </div>
</template>

<script>
export default {
  name: 'Chart1',
  data () {
    return { }
  },
  mounted () {
    var $ = go.GraphObject.make  // for conciseness in defining templates
    var diagram =
      $(go.Diagram, "myDiagramDiv")
      diagram.groupTemplate = $(go.Group, "Auto",
        { layout: $(go.LayeredDigraphLayout,
                    { direction: 0, columnSpacing: 10 }) },
        $(go.Shape, "Rectangle", // surrounds everything
          { parameter1: 10, fill: "#fff" }),
        $(go.Panel, "Horizontal",  // position header above the subgraph
          { defaultAlignment: go.Spot.Left },
          $(go.Panel, "Vertical",  // the header
            { defaultAlignment: go.Spot.Top },
            $("SubGraphExpanderButton"),  // this Panel acts as a Button
            $(go.TextBlock,     // group title near top, next to button
              { font: "Bold 12pt Sans-Serif" },
              new go.Binding("text", "key"))
          ),
          $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(0, 10), background: "white" })
        )
      )

    diagram.layout = $(go.LayeredDigraphLayout, { direction: 90, layerSpacing: 10, isRealtime: false })

    diagram.initialContentAlignment = go.Spot.Center

    var nodeDataArray = [
      { key: "Alpha" },
      { key: "Abra" },
      { key: "Omega", isGroup: true },
      { key: "Beta", group: "Omega" },
      { key: "Gamma", group: "Omega" },
      { key: "Epsilon", group: "Omega" },
      { key: "Zeta", group: "Omega" },
      { key: "Delta" }
    ]
    var linkDataArray = [
      { from: "Alpha", to: "Omega" }, // from a Node to the Group
      { from: "Beta", to: "Gamma" },  // this link is a member of the Group
      { from: "Beta", to: "Epsilon" },  // this link is a member of the Group
      { from: "Gamma", to: "Zeta" },  // this link is a member of the Group
      { from: "Epsilon", to: "Zeta" },  // this link is a member of the Group
      { from: "Omega", to: "Delta" }  // from the Group to a Node
    ];
    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
  }
}
</script>

<style>

</style>
