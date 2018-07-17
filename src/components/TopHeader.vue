<template>
  <div>
    <nav class="navbar sticky-top bg flex-md-nowrap p-0">
      <a class="col-sm-3 col-md-2 mr-0" href="#">
        <img src="/static/images/trace-master-logo.jpg" />
      </a>
      <input class="form-control form-control-light w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data () {
    return {}
  }
}
</script>

<style>

</style>
