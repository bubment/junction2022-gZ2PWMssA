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

<style>
@font-face {
  font-family: "Averta";
  src: url(./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf) format("opentype");
}

body {
  font-family: "Averta", Helvetica, Arial;
}

a {
  margin: 10px;
}
</style>
