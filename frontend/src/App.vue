<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/buying">Buying</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
a {
  margin: 10px;
}
</style>
