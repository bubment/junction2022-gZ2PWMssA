<template>
  <ul class="counterList">
    <li v-for="(count, name) in items" v-bind:key="name">
      <span class="name">{{ name }}</span>
      <span class="iconWrap"><img class="icon" src="../assets/i-minus.svg" /></span>
      <span class="iconWrap">{{ count }}</span>
      <span class="iconWrap"><img class="icon" src="../assets/i-plus.svg"/></span>
    </li>
  </ul>
</template>

<style scoped>
.counterList {
  /* background: lightgrey; */
}
.name {
  justify-content: flex-start !important;
}
.name::first-letter {
  text-transform: uppercase;
}
.counterList {
  flex-direction: column;
}
.counterList li {
  display: flex;
  list-style: none;
}
.counterList li > * {
  flex: 1 0;
  display: flex;
  justify-content: center;
  align-items: center;

}
.iconWrap {
  max-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 25px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: [
    "items"
  ]
})
</script>
