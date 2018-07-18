<template>
  <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        John Doe
                    </a>
                </li>
                <li><router-link to="/dashboard">
                  <font-awesome-icon icon="box" />
                  <span class="menu-item">Dashboard</span>
                  </router-link>
                </li>
                <li>
                  <a href="#">
                  <font-awesome-icon icon="coffee" />
                    <span class="menu-item">Shortcuts</span>
                    </a>
                </li>
                <li>
                    <router-link to="/users">
                      <font-awesome-icon icon="user" />
                      <span class="menu-item">Users</span>
                    </router-link>
                </li>
                <li>
                    <a href="#">
                      <font-awesome-icon icon="box" />
                      <span class="menu-item">Events</span>
                      </a>
                </li>
                <li>
                    <a href="#">
                      <font-awesome-icon icon="truck" />
                      <span class="menu-item">Services</span>
                      </a>
                </li>
                <li>
                    <a href="#">
                      <font-awesome-icon icon="phone" />
                      <span class="menu-item">Contact</span>
                      </a>
                </li>
                                <li>
                    <a href="#">
                      <font-awesome-icon icon="building" />
                      <span class="menu-item">About</span>
                      </a>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  }
}
</script>
<style scoped>
  .menu-item {
    display: none;
  }

  #wrapper.toggled .menu-item {
    display: inline-block;
  }
</style>
