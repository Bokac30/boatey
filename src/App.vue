<template>
  <div id="app">

    <!-- Navbar -->
    <top-header />

    <div id="wrapper" :class="{toggled: isActive}">

        <!-- Sidebar -->
        <sidebar />
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
          <span v-on:click="toggleMenu" class="hand">
            <font-awesome-icon icon="bars" />
          </span>
            <div class="container-fluid">
                <router-view/>
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

export default {
  name: 'App',
  components: {
    Sidebar,
    TopHeader
  }
  ,data () {
    return {
      isActive: true
    }
  },
  mounted () {
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
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
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
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
