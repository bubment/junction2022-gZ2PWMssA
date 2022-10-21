<template>
    <div class="container">
      <h3>{{message}}</h3>
    </div>
</template>

<script>
export default {
  name:'TemplateBox',
  props:{
    message: String,
  }
}
</script>

<style scoped>
.container {
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
}
</style>
