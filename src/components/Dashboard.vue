<template>
  <div class="bootstrap">
    <div>
      Dashboard test <button class="btn">Click me</button>
    </div>
    <div class="row">
      <div class="col-1 hamburger-menu">1</div>
      <div class="col-9 content-panel">
        <div id="myDiagramDiv" style="border: solid 1px blue; width:400px; height:150px"></div>
      </div>
      <div class="col-2 side-panel">3</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    var diagram = new go.Diagram('myDiagramDiv')
    diagram.model = new go.GraphLinksModel(
      [{ key: 'Hello' }, // two node data, in an Array
        { key: 'World!' }],
      [{ from: 'Hello', to: 'World!' }] // one link data, in an Array
    )
  }
}
</script>
<style scoped>
  .hamburger-menu {
    background-color: chocolate;
  }
  .content-panel {
    background-color: #e5e5e5;
  }
  .side-panel {
    background-color: greenyellow;
  }
</style>
