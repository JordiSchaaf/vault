<template>
  <div id="app">
    <navbar v-if="loggedIn"/>
    <router-view/>
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
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html, body {
  height: 100% !important;
  // background: url('./assets/bg-noise.png') repeat fixed 0 0;
  background-color: #ffffff;
}
body {
  margin: 0;
}
</style>
