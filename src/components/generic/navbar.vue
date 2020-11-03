<template>
  <b-navbar type="is-grey"
            fixed-top
            wrapper-class="container">
    <template slot="start">

      <b-navbar-item tag="router-link" to="/">
        Home
      </b-navbar-item>
      <!-- Add additional routes -->

    </template>
    <template slot="end">

      <b-navbar-dropdown :label="currentUser"
                         boxed
                         hoverable>
        <b-navbar-item tag="router-link" to="/Profile">
          My Profile
        </b-navbar-item>
        <hr class="navbar-divider">
        <b-navbar-item @click="signOut">
          Sign Out
        </b-navbar-item>
      </b-navbar-dropdown>

    </template>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
    ...mapActions([
      'signOut'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  color: $text !important;
}
.navbar {
  font-size: 1.25rem;
  color: $text !important;
  &-start > .navbar-item {
    color: $text !important;
  }
  a {
    color: $text !important;
  }
}
</style>

<style lang="scss">
.navbar.is-grey .navbar-start > .navbar-item, .navbar.is-grey .navbar-start .navbar-link, .navbar.is-grey .navbar-end > .navbar-item, .navbar.is-grey .navbar-end .navbar-link {
  color: $text !important;
  &::after {
    border-color: $text !important;
    font-size: 1rem;
  }
}
</style>
