<template>
  <div class="myShoppingList container">
    <h1>My shopping list</h1>
    <CounterList
      :items="cartStore.items"
      :incrementFunction="cartStore.incrementItem"
      :decrementFunction="cartStore.decrementItem"
    />
    <hr />
  </div>
</template>

<style scoped>
.myShoppingList {
  font-family:'AvertaDemoPECuttedDemo-Regular';
}
h1 {
  font-weight: bold;
  color: var(--cc-secondary);
}
</style>
<script>
import backendService from '../services/backend-service'
import CounterList from '../components/CounterList.vue';
import { useCartStore } from '../stores/cart'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyShoppingList',
  setup() {
    const cartStore = useCartStore()
    return {cartStore}
  },
  data() {
    return {
      name: 'Te'
    };
  },
  components:{ CounterList },
  methods: {
    getAbout: async function(){
      const about = (await backendService.getAbout()).data;
      this.name = about.name;
    }
  }
})

</script>
