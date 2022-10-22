<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
  font-family: "Averta";
  src: url(./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf) format("opentype");
}
@font-face {
  font-family: "Averta";
  src: url(./assets/fonts/AvertaDemoPE-ExtraBold) format("opentype");
  font-weight: bold;
}

body {
  font-family: "Averta", Helvetica, Arial;
}

a {
  margin: 10px;
}
</style>
