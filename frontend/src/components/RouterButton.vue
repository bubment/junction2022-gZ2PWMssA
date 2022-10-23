<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'RouterButton',
  props: {
    buttonText: String,
    route: String
  },
  data() {
    return {
      savedLists:[
        {"name": "Weekly shoping (12 items)"},
        {"name": "Friday night party (5 items)"},
        {"name": "My snacks (3 items)"},
      ]
    };
  }
}
</script>

<template>
  <RouterLink  class="btn btn-primary savings-button align-self-end" tag="button" :to="route">{{buttonText}}</RouterLink>
</template>

<style scoped>
  .savings-button{
    position: fixed;
    bottom: 25px;
    width: 90vw;
    margin: 0 20px;
    background-color: var(--cc-accent);
  }

  a {
    color: white !important;
    text-decoration: none;
  }
</style>
