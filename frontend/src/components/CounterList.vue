<template>
  <ul class="counterList">
    <li v-for="(count, name) in items" v-bind:key="name">
      <span class="name">{{ name }}</span>
      <span class="iconWrap">
        <img class="icon" src="../assets/i-minus.svg" @click="decrementFunction(name)" />
      </span>
      <span class="iconWrap">{{ count }}</span>
      <span class="iconWrap">
        <img class="icon" src="../assets/i-plus.svg" @click="incrementFunction(name)" />
      </span>
    </li>
  </ul>
</template>

<style scoped scss>
.name {
  justify-content: flex-start !important;
  text-transform: capitalize;
  color: var(--cc-secondary);
}
.counterList {
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.counterList li {
  display: flex;
  list-style: none;
  padding: 2px 0;
  margin: 0;
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
  color: var(--cc-primary);
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
    "items",
    "incrementFunction",
    "decrementFunction"
  ]
})
</script>
