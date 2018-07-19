<template>
  <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        John Doe
                    </a>
                </li>
                <li><router-link to="/dashboard">
                  <font-awesome-icon icon="tachometer-alt" />
                  <span class="menu-item">Dashboard</span>
                  </router-link>
                </li>
                <li>
                  <a href="#">
                  <font-awesome-icon icon="industry" />
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
            <div class="sidebar-bottom">
              <div class="sidebar-bootom-item" title="Settings">
                <img src="/static/images/sidebar/iconSettings.jpg" alt="Settings" />
              </div>
              <div class="sidebar-bootom-item" title="Suppliers">
                <img src="/static/images/sidebar/iconSuppliers.jpg" alt="Suppliers" />
              </div>
              <div class="sidebar-bootom-item" title="Distributors">
                <img src="/static/images/sidebar/iconDistributors.jpg" alt="Distributors" />
              </div>
              <div class="sidebar-bootom-item" title="Logistic Partners">
                <img src="/static/images/sidebar/iconLogisticPartners.jpg" alt="Logistic Partners" />
              </div>
              <div class="sidebar-bootom-item" title="Retailers">
                <img src="/static/images/sidebar/iconRetailers.jpg" alt="Retailers" />
              </div>
            </div>
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
    position: absolute;
    top: 350px;
  }

  .sidebar-bootom-item {
    margin: 20px;
    cursor: pointer;
  }
</style>
