<template>
  <div class="navbar-item">
    <div class="navbar-link">{{itemLabel}}</div>
    <div class="navbar-dropdown">
      <div v-for="(group, index) in routes" :key="index">
        <router-link class="navbar-item"
                      v-for="(route, menuItem) in group"
                      :to="route"
                      :key="route">
          {{menuItem}}
        </router-link>
        <hr v-if="index < routes.length -1" class="navbar-divider">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    itemLabel: {
      required: true,
      type: String
    },
    routes: {
      required: true,
      type: Array
    }
  },
  data: () => ({}),
  methods: {}
}
</script>
