<template>
  <div id="app">

    <!-- Navbar -->
    <top-header v-if="authenticated" @authenticated="setAuthenticated" />

    <div id="wrapper" :class="{toggled: $toggledMenu}">

        <!-- Sidebar -->
        <sidebar v-if="authenticated" />
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">

            <div class="container-fluid">
                <div>
                  <router-view @authenticated="setAuthenticated" />
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
    return {
      authenticated: false,
      mockAccount: {
        username: 'demo',
        password: 'demo'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      if (status === false) {
        this.$store.dispatch('TOGGLE_SIDEBAR', false)
      }
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
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
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.fsml {
  font-size: .8em
}

</style>
