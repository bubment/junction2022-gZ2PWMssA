<template>
  <div class="myShoppingList container">
    <div class="pageHeader">
      <span><h1>My shopping list</h1>
      <!-- <p v-for="c in cartStore.categoryNames">{{c}}</p> -->
      </span>
      <span><img class="icon" src="../assets/i-shoppingbag.svg" @click="incrementFunction(name)" /></span>
    </div>
    <div v-for="c in cartStore.categoryNames" v-bind:key="c">
      <CategorizedList :category="c"/>
      <!-- <CounterList
        :items="cartStore.items"
        :incrementFunction="cartStore.incrementItem"
        :decrementFunction="cartStore.decrementItem"
      /> -->
    </div>
    <hr />
  </div>
  <RouterButton buttonText="Go to offers" route="/recommendations"></RouterButton>
</template>

<style scoped>
.myShoppingList {
	font-family: "Averta", Helvetica, Arial;
}
h1 {
  font-weight: normal;
  color: var(--cc-secondary);
  margin-bottom: 0;
}
.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.pageHeader > * {
  display: block;
}
.icon {
  height: calc(1.5rem + 1.5vw);
  width: auto;
}
</style>
<script>
import backendService from '../services/backend-service'
import CounterList from '../components/CounterList.vue';
import CategorizedList from '../components/CategorizedList.vue';
import RouterButton from '../components/RouterButton.vue'
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
  components:{ CounterList, CategorizedList, RouterButton },
  methods: {
    getAbout: async function(){
      const about = (await backendService.getAbout()).data;
      this.name = about.name;
    }
  }
})

</script>
