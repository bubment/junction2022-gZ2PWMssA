<template>
	<div class="container recommendation-item">
		<div class="row">
			<div class="col">
				<img class="brand-logo" :src="imageUrl">
			</div>
			<div class="col list-row-item">
				{{ formattedPrice }}
			</div>
			<div class="col list-row-item">
				{{ formattedDistance }}
			</div>
			<div class="col list-row-button">
				<button class="btn btn-primary shop-item-button" type="submit"><a class="navigation-link" :href="navigationUrl">Navigate</a></button>
			</div>
		</div>
	</div>
</template>

<script>
import backendService from '../services/backend-service'
export default {
  name:'RecommendationShopListItem',
  props:{
    recommendation: Object,
  },
  computed: {
    imageUrl() {
      return backendService.composeImgUrl(this.recommendation.logoUrl)
    },
    formattedPrice() {
      return `${this.recommendation.basketSumPrice.toLocaleString()} HUF`
    },
    formattedDistance(){
      return `${(this.recommendation.distance / 1000).toFixed(2)} km`
    },
    navigationUrl(){
      const {lat, lng} = this.recommendation.location;
      return `https://maps.google.com/?q=${lat},${lng}`
    }

  }
}
</script>

<style scoped>
.brand-logo{
  height: 50px;
  width: 50px;
}

.recommendation-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--cc-gray);
  font-family: "Averta", Helvetica, Arial;
}

.list-row-item{
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
}
.list-row-button {
  margin-top:5px;
}
.navigation-link{
  color: var(--cc-white);
  text-decoration: none;
}

.shop-item-button{
  background-color: var(--cc-primary);
  border: none;
}
</style>
