<template>
  <li :class="{ selected: isSelected }" @click="isPristine ? incrementFunction(productName) : null">
    <span class="name">{{ productName }}</span>
    <span v-if="isSelected" class="iconWrap">
      <img class="icon" src="../assets/i-minus.svg" @click="decrementFunction(productName)" />
    </span>
    <span v-if="isSelected" class="iconWrap">{{ count }}</span>
    <span v-if="isSelected" class="iconWrap">
      <img class="icon" src="../assets/i-plus.svg" @click="incrementFunction(productName)" />
    </span>
  </li>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'ProductListItem',
  props: [
    "productName",
    "incrementFunction",
    "decrementFunction"
  ],
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  data: function () {
    return { isPristine: false }
  },
  mounted() {
    this.isPristine = this.count === 0
  },
  watch: {
    isSelected: function () {
      if (!this.isSelected) {
        setTimeout(() => {
          this.isPristine = true;
        }, 500)
      } else {
        this.isPristine = false;
      }
    }
  },
  computed: {
    count: function () {
      return this.cartStore.items[this.productName] ?? 0;
    },
    isSelected: function () {
      console.log('isSelected', this.count !== 0);
      return this.count !== 0;
    }
  }
}
</script>

<style scoped scss>
li {
  display: flex;
  list-style: none;
  padding: 10px;
  border-radius: 10px;
}

li.selected {
  background-color: var(--cc-active-row);
}

li>* {
  flex: 1 0;
  display: flex;
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
  z-index: 1000;
}

.name {
  text-transform: capitalize;
  color: var(--cc-secondary);
  font-size: 14px;
}
</style>
