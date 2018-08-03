const SidebarToggle = {
  // props: {
  //   toggled: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
  data () {
    return {
      toggled: false
    }
  },
  mounted () {
    if (this.$parent.authenticated) {
      this.toggleSidebar()
    }
  },
  methods: {
    toggleSidebar () {
      this.toggled = !this.toggled
      this.$store.dispatch('TOGGLE_SIDEBAR', this.toggled)
    }
  },
  computed: {
    $toggledMenu () {
      return this.$store.getters.toggledFlag
    }
  }
}

export default SidebarToggle
