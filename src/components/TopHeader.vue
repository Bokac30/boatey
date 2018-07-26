<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="/static/images/trace-master-logo.jpg" class="pl-3 pr-3" />
        <button @click="toggleSidebar" class="burger-icon pl-3 pr-3">
          <awesome icon="bars" />
        </button>
      </a>
      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0  mr-auto">
          <input class="form-control-sm mr-sm-2 bg-light fsml" type="search" placeholder="Search Item / Batch / Pallete" aria-label="Search">
          <button class="btn btn-sm my-2 my-sm-0 bg-light border" type="submit">
            <awesome icon="search" />
          </button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Messages <span class="sr-only">(current)</span>
              <img src="/static/images/navbar/topBarIconMessages.jpg" /></a>
          </li>
          <li class="nav-item nav-separator">
             <img src="/static/images/navbar/topBarIconSeparator.jpg" />
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Notifications
              <img src="/static/images/navbar/topBarIconNotifications.jpg" />
              </a>
          </li>
          <li class="nav-item nav-separator">
             <img src="/static/images/navbar/topBarIconSeparator.jpg" />
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
          <li class="nav-item nav-separator">
             <img src="/static/images/navbar/topBarIconSeparator.jpg" />
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              Logout
              <img src="/static/images/navbar/topBarIconLogout.jpg" />
            </a>
          </li>
        </ul>
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

/*
 * Navbar
 */

.navbar-brand {
  /* padding-top: .50rem;
  padding-bottom: .50rem; */
  font-size: 1rem;
  position: relative;
  top: 0;
  /* background-color: rgba(0, 0, 0, .25); */
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25); */
}

.navbar .form-control-sm {
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

.nav-separator {
  padding-left: 5px;
  padding-right: 5px;
}
.fsml {
  font-size: .8em
}
</style>
