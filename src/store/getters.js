export default {
  currentUser (state) {
    return state.currentUser.firstName || state.currentUser.email
  },
  loggedIn (state) { return state.loggedIn }
}
