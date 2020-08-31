<template>
  <nav class="navbar is-blue-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <navbar-item></navbar-item>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" @click="signOut">Sign out</a>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import NavbarItem from '@/components/generic/navbar/navbar_item'

export default {
  name: 'Navbar',
  components: {
    NavbarItem
  },
  props: {
    menus: {
      type: Object
    }
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

</style>
