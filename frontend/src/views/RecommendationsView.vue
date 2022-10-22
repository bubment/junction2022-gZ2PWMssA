<script>
import GoogleMapLoader from '../components/GoogleMapLoader.vue'
import RecommendationShopListItem from "../components/RecommendationShopListItem.vue";
import backendService from '../services/backend-service'

export default {
  name: 'GoogleMap',
  data() {
    return {
      //[TODO] This info should come from the state handler
      cartContent: [
        {name: 'milk', quantity: 2},
        {name: 'cheese', quantity: 4}
      ],
      recommendations: null
    };
  },
  components: {
    GoogleMapLoader,
    RecommendationShopListItem
  },
  async mounted() {
    this.recommendations = (await backendService.postRecommendations(this.cartContent)).data;
  }
}
</script>

<template>
  <GoogleMapLoader :recommendations="this.recommendations" ref="mapLoader"/>
  <div class="recommendations-bottom-design" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><p class="icon-container"><i class="arrow-up"></i></p></div>
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
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
          </div>
          <RecommendationShopListItem v-for="item in recommendations" :recommendation="item" />
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
  background-color: white;
  border-radius: 20px 20px 0 0;
  border: 2px solid #37517e;
}

.arrow-up {
  border: solid black;
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
  text-align: center;
}

.own-offcanvas-style {
  height: 90vh !important;
}
</style>
