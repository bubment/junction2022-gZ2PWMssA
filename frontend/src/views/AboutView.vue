<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>A legfontosabb dolog a földön: {{name}}</h2>
    <button @click="getAbout()">Valóság</button>
    <h2>Cart:</h2>
      <p v-for="(quantity, name) in cartStore.items" v-bind:key="name">
        {{name}}: {{quantity}}
      </p>
      <button @click="cartStore.incrementItem('pineapple')">More Pineapple</button>
      <button @click="cartStore.decrementItem('pineapple')">Less Pineapple</button>
      <button @click="cartStore.incrementItem('orange')">More Pineapple</button>
      <button @click="cartStore.decrementItem('orange')">Less Pineapple</button>
    <hr />
    <TemplateBox message="Asd!" submessage=""></TemplateBox>
    <TemplateBox message="Kek!" submessage=""></TemplateBox>
    <CounterList
      :items="{'pineapple': 2, 'orange': 1, 'apple': 3}"
    />
    <hr />
  </div>
</template>

<style>
</style>
<script>
import backendService from '../services/backend-service'
import TemplateBox from '../components/TemplateBoxComponent.vue';
import CounterList from '../components/CounterList.vue';
import { useCartStore } from '../stores/cart'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    const cartStore = useCartStore()
    return {cartStore}
  },
  data() {
    return {
      name: 'Te'
    };
  },
  components:{ TemplateBox, CounterList },
  methods: {
    getAbout: async function(){
      const about = (await backendService.getAbout()).data;
      this.name = about.name;
    }
  }
})

</script>
