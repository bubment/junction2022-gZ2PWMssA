<template>
  <div class="accordion accordion-flush" :id="'accordionFlushExample' + uuid">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="'flush-headingOne' + uuid">
        <button class="btnHeader accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + uuid" aria-expanded="true" :aria-controls="'flush-collapseOne' + uuid">
          {{category}}
        </button>
      </h2>
      <div :id="'flush-collapseOne' + uuid" class="accordion-collapse collapse show" :aria-labelledby="'flush-headingOne' + uuid" :data-OFF-bs-parent="'#accordionFlushExample' + uuid">
        <div class="accordion-body">
          <CounterList
            :items="cartStore.items"
            :possibleValues="cartStore.productsRawCat[category]"
            :incrementFunction="cartStore.incrementItem"
            :decrementFunction="cartStore.decrementItem"
          />
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
<style scoped>
.btnHeader {
  background: none !important;
  text-transform: capitalize;
  color: var(--cc-secondary) !important;
}
.accordion-item {
  border: 2px solid var(--cc-secondary) !important;
  border-radius: 20px !important;
}
.accordion-header {
  position: relative;
}
.accordion-header::before {
  content: " ";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  border: 2px solid var(--cc-secondary);
  border-radius: 20px;
}
.accordion-button {
  box-shadow: none !important;
}
.accordion-button::after {
  background-image: var(--bs-accordion-btn-icon) !important;
}
</style>
<script>
import { defineComponent, toRaw } from 'vue'
import { useCartStore } from '../stores/cart'
import CounterList from '../components/CounterList.vue';

let uuid = 0
export default defineComponent({
  props: [
    "category"
  ],
  components: {CounterList},
  setup() {
    const cartStore = useCartStore()
    return {cartStore}
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  methods: {
    isInCurrentCategory: function(item) {
      // let itemsOfCat = cartStore.categories
      cartStore.productsRaw.categories.filter(x => x.name === props.category)[0].products.map(x => x.name).includes(item)
    },
  },
  computed: {
    // activeProducts: function() {
    //   // console.log(this.cartStore.items)
    //   console.log(this.cartStore.productsRaw)
    //   return []
    //   // this.cartStore.items.filter(x=> isInCurrentCategory(x))
    // }
  }
})
</script>
