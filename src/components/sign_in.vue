<template>
  <div class="wrapper">
    <form @submit.prevent="login">
      <article class="loginBox">
        <div class="circle">
          <b-icon icon="account" size="is-large"/>
        </div>
        <p v-if="signupFields" class="is-size-1">Sign up</p>
        <br>
        <b-field>
          <b-input placeholder="Email adress"
                  v-model="email"/>
        </b-field>
        <b-field>
          <b-input expanded
                  placeholder="******"
                  v-model="password"
                  type="password"/>
        </b-field>
        <b-field v-if="signupFields"
                label="Confirm password">
          <b-input v-model="passwordRepeat" type="password"/>
        </b-field>
        <div class="placeholder-login-button">
          <b-button native-type="submit" type="is-primary" outlined rounded>Login</b-button>
        </div>
        <!-- <b-button @click="signup" class="is-info">
          Sign up
        </b-button> -->
      </article>
    </form>
  </div>
</template>

<script>
import { VaSe } from '@/js/generic'
import { sha256Hash } from '@/js/sha'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      signupFields: false
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password
      })
    },
    async signup () {
      if (!this.signupFields) this.signupFields = true
      else {
        if (this.password === this.passwordRepeat) {
          try {
            await VaSe.post('/signup', {
              email: this.email,
              password: sha256Hash(this.password)
            })
            this.login()
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  width: 25rem;
  // border: 2px solid #4F772D;
  border-radius: .75rem;
  padding: 1.5rem;
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.placeholder-login-button {
  height: 36px;
}
</style>
