<template>
  <ProductList :items="products" :incrementFunction="cartStore.incrementItem"
    :decrementFunction="cartStore.decrementItem"></ProductList>
  <RouterButton buttonText="Back to categories" route="/categories"></RouterButton>
</template>
  
<script>
import ProductList from '../components/ProductList.vue';
import { useCartStore } from '../stores/cart'
import backendService from '../services/backend-service';
import RouterButton from '../components/RouterButton.vue'

export default {
  name: "ProductsView",
  components: { ProductList, RouterButton },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  data() {
    return {
      category: this.$route.params.category,
      products: {}
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const productsResult = (await backendService.getProductsByCategory(this.category)).data;
      productsResult.forEach(product => {
        this.products[product.name] = this.getCartItemCount(product.name);
      });
    },
    getCartItemCount(productName) {
      return this.cartStore.items[productName] ?? 0
    }
  },
}
</script>
