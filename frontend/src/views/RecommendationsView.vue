<script>
import GoogleMapLoader from '../components/GoogleMapLoader.vue'
import RecommendationShopListItem from "../components/RecommendationShopListItem.vue";
import Loader from "../components/Loader.vue";
import backendService from '../services/backend-service'

export default {
  name: 'GoogleMap',
  data() {
    return {
      //[TODO] This info should come from the state handler
      cartContent: [
        {name: 'champagne', quantity: 3},
        {name: 'beer', quantity: 10},
        {name: 'vodka', quantity: 5},
        {name: 'hamburger', quantity: 2},
        {name: 'water', quantity: 8},
      ],
      recommendations: null,
      sortedRecommendations: null,
      isLoaderOn: true
    };
  },
  components: {
    GoogleMapLoader,
    RecommendationShopListItem,
    Loader
  },
  async mounted() {
    const randomLoaderLength = Math.floor(Math.random() * 1500) + 700;
    setTimeout(() => {this.isLoaderOn = false}, randomLoaderLength)
    this.recommendations = (await backendService.postRecommendations(this.cartContent)).data;
    this.sortRecommendations('basketSumPrice')
  },
  methods: {
    sortLogicChanged(event){
      const activeRadiobutton = event.target.id;
      let sortingbase = '';
      switch (activeRadiobutton) {
        case 'closest':
          sortingbase = 'distance'
          break;
        case 'cheapest':
          sortingbase = 'basketSumPrice'
          break;
        default:
          sortingbase = 'basketSumPrice'
      }
      this.sortRecommendations(sortingbase)

    },
    sortRecommendations(sortBase){
      this.sortedRecommendations = this.recommendations.sort((a,b) => a[sortBase] - b[sortBase]);
    }
  }
}
</script>

<template>
  <Loader v-if="isLoaderOn"></Loader>
  <GoogleMapLoader :recommendations="this.sortedRecommendations" ref="mapLoader"/>
  <div class="recommendations-bottom-design" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><p class="icon-container"><i class="arrow-up"></i><span class="open-offset-text">Offers</span></p></div>
  <div class="container">
    <div class="offcanvas offcanvas-bottom own-offcanvas-style" tabindex="1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Recommendation list</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="closest" @change="sortLogicChanged($event)">
                <label class="form-check-label" for="closest">
                  Closest
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="cheapest" @change="sortLogicChanged($event)" checked>
                <label class="form-check-label" for="cheapest">
                  Cheapest
                </label>
              </div>
            </div>
          </div>
          <RecommendationShopListItem v-for="item in sortedRecommendations" :recommendation="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.recommendations-bottom-design{
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--cc-white);
  border-radius: 20px 20px 0 0;
  border: 2px solid var(--cc-primary);
}

.arrow-up {
  border: solid var(--cc-primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  height: 5px;
  width: 5px;
}

.icon-container{
  margin-top: 5px;
  margin-left: 30px;
}

.own-offcanvas-style {
  height: 90vh !important;
  font-family: "Averta", Helvetica, Arial;
}

.open-offset-text{
  margin-left: 15px;
}
</style>
