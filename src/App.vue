<template>
  <div id="app">
    <div class="container">
      <navbar v-if="loggedIn"/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/generic/navbar'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $text;
  height: 100%;
  padding: 1.5rem;
}
html, body {
  height: 100% !important;
  background-color: #ffffff;
}
body {
  margin: 0;
}
</style>
