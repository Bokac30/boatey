<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="/static/images/trace-master-logo.jpg" class="pl-3 pr-3" />
        <button @click="toggleSidebar" class="burger-icon pl-3 pr-3">
          <font-awesome-icon icon="bars" />
        </button>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0  mr-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Search Item / Batch / Pallete" aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit">
            <font-awesome-icon icon="search" />
          </button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Messages <span class="sr-only">(current)</span>
              <img src="/static/images/navbar/topBarIconMessages.jpg" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Notifications
              <img src="/static/images/navbar/topBarIconNotifications.jpg" />
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="nav-settings" aria-haspopup="true" aria-expanded="false">
              Settings
              <img src="/static/images/navbar/topBarIconSettings.jpg" />
            </a>
            <div class="dropdown-menu collapse" aria-labelledby="navbarDropdown" id="nav-settings">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>

        <div class="nav-item">
            <a class="nav-link" href="#" role="button"  aria-haspopup="true" aria-expanded="false">
              Logout
              <img src="/static/images/navbar/topBarIconLogout.jpg" />
            </a>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SidebarToggle from './mixins/sidebar-toggle'

export default {
  name: 'TopHeader',
  mixins: [SidebarToggle],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
  .burger-icon {
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
