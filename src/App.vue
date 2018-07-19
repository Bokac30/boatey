<template>
  <div id="app">

    <!-- Navbar -->
    <top-header />

    <div id="wrapper" :class="{toggled: $toggledMenu}">

        <!-- Sidebar -->
        <sidebar />
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <div class="container-fluid">
                <div style="margin-left:5px;">
                  <router-view/>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import TopHeader from './components/TopHeader'
import SidebarToggle from './components/mixins/sidebar-toggle'

export default {
  name: 'App',
  mixins: [SidebarToggle],
  components: {
    Sidebar,
    TopHeader
  },
  data () {
    return { }
  },
  mounted () {
  },
  methods: {
    foo () { },
    bar () { }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0;
}

body {
  font-size: .875rem;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  /* background-color: rgba(0, 0, 0, .25); */
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25); */
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 1px;
  border-radius: 5px 5px 5px;
}

.form-control-light {
  color: #333;
  background-color: rgba(255, 255, 255, .5);
  border-color: rgba(255, 255, 255, .5);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>
