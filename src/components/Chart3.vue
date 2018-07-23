<template>
  <div>
    <div id='myDiagramDiv' class='diagram-chart'></div>
  </div>
</template>

<script>
  export default {
    name: 'Chart3',
    data () {
      return { }
    },
    mounted () {
      var $ = go.GraphObject.make
      var diagram = $(go.Diagram, 'myDiagramDiv')

      diagram.nodeTemplate = $(go.Node, 'Auto',
        $(go.Shape, 'Rectangle', { strokeWidth: 0}, new go.Binding('fill', 'color')),
        $(go.Panel, 'Vertical', {},
          $(go.TextBlock, { margin: 1 }, new go.Binding('text', 'key')),
          $(go.TextBlock, { margin: 1 }, new go.Binding('text', 'color'))
        ),
      )

      // define the Group template to be fairly simple
      diagram.groupTemplate = $(go.Group, 'Auto',
        {
          selectable: false
        },
        $(go.Shape, { fill: 'transparent', stroke: 'darkgoldenrod' }),
        $(go.Placeholder, { padding: 10 }),
        $('SubGraphExpanderButton', { alignment: go.Spot.TopLeft })
      )

      diagram.model.nodeDataArray = [
        { key: 'Alpha', color: 'red', isGroup: true },
        { key: 'Beta', color: 'blue', group: 'Alpha' },
        { key: 'Gamma', color: 'green', group: 'Alpha', isGroup: true },
        { key: 'Delta', color: 'pink', group: 'Gamma' },
        { key: 'Epsilon', color: 'red', group: 'Gamma' },
        { key: 'Zeta', color: 'violet', group: 'Alpha' },
        { key: 'Eta', color: 'orange', group: 'Alpha', isGroup: true},
        { key: 'Theta', color: 'red', group: 'Eta' },
        { key: 'Foo', color: 'green', group: 'Eta'}
      ]


    }
  }
</script>

<style>
.diagram-chart {
  width: 100%;
  height: 300px;
}
</style>
