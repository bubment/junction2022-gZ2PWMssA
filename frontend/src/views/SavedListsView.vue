<script>
import { RouterLink } from 'vue-router'
import RouterButton from '../components/RouterButton.vue'
export default {
  name: 'GoogleMapLoader',
  components: {
    RouterButton
  },
  data() {
    return {
      savedLists:[
        {"name": "Weekly shoping (12 items)"},
        {"name": "Friday night party (5 items)"},
        {"name": "My snacks (3 items)"},
      ]
    };
  }
}
</script>

<template>
  <div class="title">Your savings from wise shoppings</div>
  <div><img class="saving-img" src="@/assets/savings.svg"></div>
  <div class="title">Saved shopping lists:</div>
  <div class="container saved-list-container">
    <div v-for="item in savedLists" class="row saving-list-row  align-items-center">
      <div class="col col-10 "><span class="list-name">{{ item.name }}</span></div>
      <div class="col col-2"><img src="@/assets/i-arrow.svg"></div>
    </div>
  </div>
  <RouterButton buttonText="Create new list" route="/categories"></RouterButton>
<!--  <button class="btn btn-primary savings-button align-self-end"><RouterLink to="/categories">Create new list</RouterLink></button>-->
</template>

<style scoped>
.title {
  font-family: "Averta";
  color: var(--cc-primary);
  font-size: 18px;
  margin: 18px;
}
.saving-img{
  margin: 0 18px;
  height: 160px;
  width: 90vw;
}

.list-name{
	margin-top: 10px;
}

.saved-list-container{
  margin: 15px;
}

.saving-list-row{
  border-bottom: 1px solid var(--cc-primary);
  margin-right: 20px !important;
  margin-top: 10px;
  font-family: "Averta";
  color: var(--cc-primary);
}
</style>
