<script>
export default {
  name: 'RouterButton',
  props: {
    buttonText: String,
    route: String
  },
  data() {
    return {
    };
  }
}
</script>

<template>
<div class="background-container">
  <img src="../assets/loader.gif" alt="">
</div>
</template>

<style scoped>
.background-container{
  height: 100%;
  width: 100%;
  background-color: rgba(120,120,120,0.85);
  position: fixed;
  top:0;
  left: 0;
  z-index: 9999;
}

img {
  position: fixed;
  top: 250px;
  left: 100px;
}
</style>
