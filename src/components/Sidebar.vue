<template>
  <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li><router-link to="/dashboard">
                  <font-awesome-icon icon="box" />
                  Dashboard</router-link>
                </li>
                <li>
                  <a href="#">
                  <font-awesome-icon icon="coffe" />
                    Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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

</style>
