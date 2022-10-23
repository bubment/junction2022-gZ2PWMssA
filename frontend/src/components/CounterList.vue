<template>
  <TransitionGroup tag="ul" name="fade" class="counterList">
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
  </TransitionGroup>
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
  font-family: "Averta", Helvetica, Arial;
}
.counterList li {
  display: flex;
  list-style: none;
  padding: 2px 0;
  margin: 0 0 15px 0;
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

/* Transition */
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: [
    "items",
    "incrementFunction",
    "decrementFunction",
    "possibleValues"
  ]
})
</script>
