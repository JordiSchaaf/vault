<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <b-menu>
        <b-menu-list>
          <b-menu-item icon="account-outline"
                       label="Account Info"/>
          <b-menu-item icon="cog-outline"
                       label="Settings">
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
    <div class="column is-four-fifths" id="spaceLeft">
      <h1 class="title">Account Info</h1>
      <p>{{user}}</p>
    </div>
  </div>
</template>

<script>
import { VaSe } from '@/js/generic'

export default {
  name: 'Profile',
  data () {
    return {
      user: ''
    }
  },
  async mounted () {
    this.user = await VaSe.get('/user/me')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#spaceLeft {
  padding-left: 2.5rem;
}
</style>
