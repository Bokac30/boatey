<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <div>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
          <b-collapse id=collapse1_inner class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
