<template>
  <div class="myShoppingList container">
    <h1>My Shopping list</h1>
    <h2>A legfontosabb dolog a földön: {{name}}</h2>
    <CounterList
      :items="cartStore.items"
      :incrementFunction="cartStore.incrementItem"
      :decrementFunction="cartStore.decrementItem"
    />
    <hr />
  </div>
</template>

<style>
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
