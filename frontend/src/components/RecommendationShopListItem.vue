<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="recommendation.logoUrl">
      </div>
      <div class="col">
        {{ recommendation.basketSumPrice }}
      </div>
      <div class="col">
        {{ recommendation.distance }}
      </div>
      <div class="col">
        Get navigation
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendationShopListItem',
  props:{
    recommendation: Object,
  },
}
</script>

<style scoped>
</style>
