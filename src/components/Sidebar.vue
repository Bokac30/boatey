<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand p-4">
        <router-link to="/">
          <awesome icon="user" /> John Doe
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard">
          <awesome icon="chart-bar" />
          <span class="menu-item">DASHBOARD</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart1">
          <awesome icon="project-diagram" />
          <span class="menu-item">TRACEABILITY</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart2">
          <awesome icon="clipboard-check" />
          <span class="menu-item">CHEKTESTICON</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart2" v-b-toggle.collapse1>
          <awesome icon="reply-all" />
          <span class="menu-item">RECALL MANAGEMENT</span>
        </router-link>
        <b-collapse id="collapse1" class="mt-2">
          <ul class="sub-menu">
            <li>
              <router-link to="/chart1">
                Recall Plan
              </router-link>
            </li>
            <li>
              <router-link to="/chart1">
                Claims Management
              </router-link>
            </li>
            <li>
              <router-link to="/chart1">
                Recall Case overview
              </router-link>
            </li>
            <li>
              <router-link to="/chart1">
                Recall Termination
              </router-link>
            </li>
          </ul>
        </b-collapse>
      </li>
      <li>
        <router-link to="/chart3">
          <awesome icon="shipping-fast" />
          <span class="menu-item">DISTRIBUTION CONTROL</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart3">
          <awesome icon="pallet" />
          <span class="menu-item">INCUBATION</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart3">
          <awesome icon="clipboard-check" />
          <span class="menu-item">COMPLIANCY</span>
        </router-link>
      </li>
      <li>
        <div class="sidebar-bottom sidebar-nav m-1">
      <div class="sidebar-bootom-item" title="Settings">
        <router-link to="/chart1">
          <awesome icon="cogs" />
          <span class="menu-item">Settings</span>
        </router-link>
      </div>
      <div class="sidebar-bootom-item" title="Suppliers">
        <router-link to="/chart2">
          <awesome icon="truck-moving" />
          <span class="menu-item">Suppliers</span>
        </router-link>
      </div>
      <div class="sidebar-bootom-item" title="Distributors">
        <router-link to="/chart2">
          <awesome icon="cubes" />
          <span class="menu-item">Distributors</span>
        </router-link>
      </div>
      <div class="sidebar-bootom-item" title="Logistic Partners">
        <router-link to="/chart2">
          <awesome icon="ship" />
          <span class="menu-item">Logistic Partners</span>
        </router-link>
      </div>
      <div class="sidebar-bootom-item" title="Retailers">
        <router-link to="/chart2">
          <awesome icon="store-alt" />
          <span class="menu-item">Retailers</span>
        </router-link>
      </div>
    </div>
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

  .sidebar-bottom {
    position: inherit;
  }

  .sidebar-bootom-item {
    cursor: pointer;
  }
  .sidebar-bootom-item a {
    color: #999;
    background: #292d70;
  }
</style>
