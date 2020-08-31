<template>
  <div class="hello">
    <p class="is-size-1">{{users.length}} active users</p>
    <hr>
    {{users}}
    <div v-for="user in users"
         :key=user._id>
      <p>Email: {{user.email}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import { VaSe } from '@/js/generic'

export default {
  name: 'Home',
  data () {
    return {
      users: null
    }
  },
  async mounted () {
    this.users = await VaSe.get('/')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
