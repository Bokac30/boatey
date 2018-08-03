<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand p-1">
        <router-link to="/">
          <div>
            <span class="menu-icon">
              <awesome icon="user" />
            </span>
            <span class="menu-item">John Doe</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard">
          <span class="menu-icon">
            <awesome icon="chart-bar" />
          </span>
          <span class="menu-item">DASHBOARD</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart1">
          <span class="menu-icon">
            <awesome icon="project-diagram" />
          </span>
          <span class="menu-item">TRACEABILITY</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart2" v-b-toggle.collapse1>
          <span class="menu-icon">
            <awesome icon="reply-all" />
          </span>
          <span class="menu-item">RECALL MANAGEMENT</span>
        </router-link>
        <b-collapse id="collapse1" class="mt-2">
          <ul class="sub-menu">
            <li>
              <router-link to="/dashboard-charts">
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
          <span class="menu-icon">
            <awesome icon="shipping-fast" />
          </span>
          <span class="menu-item">DISTRIBUTION CONTROL</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart3">
          <span class="menu-icon">
            <awesome icon="pallet" />
          </span>
          <span class="menu-item">INCUBATION</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chart3">
          <span class="menu-icon">
            <awesome icon="clipboard-check" />
          </span>
          <span class="menu-item">COMPLIANCY</span>
        </router-link>
      </li>
      <li>
        <div class="sidebar-bottom m-1">
          <div class="sidebar-bootom-item" title="Settings">
            <router-link to="/chart1">
              <span class="menu-icon">
                <awesome icon="cogs" />
              </span>
              <span class="menu-item">Settings</span>
            </router-link>
          </div>
          <div class="sidebar-bootom-item" title="Suppliers">
            <router-link to="/chart2">
              <span class="menu-icon">
                <awesome icon="truck-moving" />
              </span>
              <span class="menu-item">Suppliers</span>
            </router-link>
          </div>
          <div class="sidebar-bootom-item" title="Distributors">
            <router-link to="/chart2">
              <span class="menu-icon">
                <awesome icon="cubes" />
              </span>
              <span class="menu-item">Distributors</span>
            </router-link>
          </div>
          <div class="sidebar-bootom-item" title="Logistic Partners">
            <router-link to="/chart2">
              <span class="menu-icon">
                <awesome icon="ship" />
              </span>
              <span class="menu-item">Logistic Partners</span>
            </router-link>
          </div>
          <div class="sidebar-bootom-item" title="Retailers">
            <router-link to="/chart2">
              <span class="menu-icon">
                <awesome icon="store-alt" />
              </span>
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
