<template>
  <div class="myShoppingList container">
    <div class="pageHeader">
      <span class="top-text">My shopping list
      <!-- <p v-for="c in cartStore.categoryNames">{{c}}</p> -->
      </span>
      <span><img class="icon" src="../assets/i-shoppingbag.svg" @click="incrementFunction(name)" /></span>
    </div>
    <div>
      <CategorizedListMeat category="meat"/>
    </div>
    <div>
      <CategorizedList category="drinks"/>
    </div>
  </div>
  <RouterButton buttonText="Go to offers" route="/recommendations"></RouterButton>
</template>

<style scoped>
.myShoppingList {
	font-family: "Averta", Helvetica, Arial;
}

.top-text {
  margin-top: 20px;
  padding-bottom: 10px;
  margin-left: 15px;
  color: var(--cc-secondary);
  font-size: 18px;
}

.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.pageHeader > * {
  display: block;
}
.icon {
  height: calc(1.5rem + 1.5vw);
  width: auto;
  margin-top: 12px;
}
</style>
<script>
import backendService from '../services/backend-service'
import CounterList from '../components/CounterList.vue';
import CategorizedList from '../components/CategorizedList.vue';
import CategorizedListMeat from '../components/CategorizedListMeat.vue';
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
  components:{ CounterList, CategorizedList, RouterButton, CategorizedListMeat },
  methods: {
    getAbout: async function(){
      const about = (await backendService.getAbout()).data;
      this.name = about.name;
    }
  }
})

</script>
