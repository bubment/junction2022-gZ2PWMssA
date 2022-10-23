<template>
  <div class="productList">
    <div v-for="(count, name) in items" v-bind:key="name">
      <!-- <div class="ruler"></div> -->
      <ProductListItem :productName="name" :incrementFunction="incrementFunction"
        :decrementFunction="decrementFunction"></ProductListItem>
    </div>
  </div>
</template>

<style scoped scss>
.ruler {
  height: 1px;
  background-color: var(--cc-gray);
  margin: 0 10px;
}

.productList {
  flex-direction: column;
  padding: 10px;
  margin: 0;
  font-family: "Averta", Helvetica, Arial;
}

</style>

<script>
import { defineComponent } from 'vue'
import ProductListItem from './ProductListItem.vue';


export default defineComponent({
  props: [
    "items",
    "incrementFunction",
    "decrementFunction"
  ],
  components: [
    ProductListItem
  ],
  methods: {
    isSelected(count) {
      return count !== 0;
    }
  },
  components: { ProductListItem }
})
</script>