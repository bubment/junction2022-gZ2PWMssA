<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
          :google="google"
          :map="map"
      />
    </template>
  </div>
</template>


<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
import backendService from '../services/backend-service'
import mapConfig from "../constants/mapConfig"

export default {
  name: 'GoogleMapLoader',
  data() {
    return {
      google: null,
      map: null,
      googleApiKey: '',
      userPosition: null,
      // recommendations: null
    };
  },
  props:{
    recommendations: Object,
  },

  async mounted() {
    this.userPosition = (await backendService.getUserPosition()).data;
    this.googleApiKey = (await backendService.getGoogleMapsApiKey()).data
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.googleApiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  computed: {
    mapConfig
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, mapConfig())
      this.addYouAreHereMarker()
      for (const recommendation of this.recommendations) {
        this.addShopMarker(recommendation.location, recommendation.basketSumPrice)
      }
    },
    addYouAreHereMarker() {
      const youAreHereMarkerIconSvgContent = `
        <svg id="Layer_1" data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 86.8">
            <defs>
                <style>.cls-1{fill:#00b9ff;}.cls-2{fill:#f22;}.cls-3{fill:#2e4369;}</style>
            </defs>
            <ellipse class="cls-1" cx="45.05" cy="9.02" rx="5.77" ry="6.77"/>
            <path class="cls-1" d="M37.34,32.36a1.14,1.14,0,0,1,.93,1.3c0,.11-1.68,10.14-2.13,16.39-.07.85-.1,1.64-.1,2.32a2.72,2.72,0,0,0,0,.28,43.54,43.54,0,0,0,.59,5.88c.11.73.23,1.47.37,2.23.61,3.6,1.37,7.28,1.82,9.36a6.45,6.45,0,0,0,5.11,5V52.65a1.13,1.13,0,0,1,2.26,0V75.1a6.46,6.46,0,0,0,5.11-5c.45-2.08,1.21-5.76,1.82-9.36.14-.76.26-1.5.38-2.23a43.29,43.29,0,0,0,.58-5.88,2.72,2.72,0,0,0,0-.28c0-.68,0-1.47-.1-2.32-.45-6.25-2.11-16.28-2.13-16.39a1.13,1.13,0,1,1,2.23-.36c.08.45,1.53,9.24,2.06,15.55a6.76,6.76,0,0,0,2.46-5.22V32.35a9,9,0,0,0-9-9h-9a9,9,0,0,0-9,9V43.63A6.76,6.76,0,0,0,34,48.85c.53-6.31,2-15.1,2.06-15.55A1.14,1.14,0,0,1,37.34,32.36Z" transform="translate(0 -3.2)"/>
            <path class="cls-2" d="M55.38,60.92c-.59,3.48-1.33,7.11-1.88,9.67a8.69,8.69,0,0,1-8.27,6.87h-.37a8.68,8.68,0,0,1-8.26-6.87c-.55-2.56-1.29-6.19-1.88-9.67C14.93,62.48,2.26,68.47,2.26,74.12,2.26,80.7,19.43,87.74,45,87.74s42.73-7,42.73-13.62C87.74,68.48,75.1,62.51,55.38,60.92Z" transform="translate(0 -3.2)"/>
            <path class="cls-3" d="M55.74,58.7a45.53,45.53,0,0,0,.59-6.05c0-.37,0-.78,0-1.21a9,9,0,0,0,4.54-7.81V32.35A11.29,11.29,0,0,0,49.56,21.08h-3c3.71-.8,6.51-4.47,6.51-8.86,0-5-3.6-9-8-9s-8,4.05-8,9c0,4.39,2.8,8.06,6.51,8.86h-3A11.3,11.3,0,0,0,29.26,32.35V43.63a9,9,0,0,0,4.54,7.81c0,.43,0,.84,0,1.21a45.53,45.53,0,0,0,.59,6.05C14.42,60.33,0,66.52,0,74.12,0,83,19.77,90,45,90s45-7,45-15.88C90,66.53,75.62,60.35,55.74,58.7ZM39.28,12.22c0-3.73,2.58-6.76,5.77-6.76s5.77,3,5.77,6.76S48.24,19,45.05,19,39.28,16,39.28,12.22ZM34,48.85a6.76,6.76,0,0,1-2.46-5.22V32.35a9,9,0,0,1,9-9h9a9,9,0,0,1,9,9V43.63a6.76,6.76,0,0,1-2.46,5.22c-.53-6.31-2-15.1-2.06-15.55a1.13,1.13,0,1,0-2.23.36c0,.11,1.68,10.14,2.13,16.39.07.85.1,1.64.1,2.32a2.72,2.72,0,0,1,0,.28,43.29,43.29,0,0,1-.58,5.88c-.12.73-.24,1.47-.38,2.23-.61,3.6-1.37,7.28-1.82,9.36a6.46,6.46,0,0,1-5.11,5V52.65a1.13,1.13,0,0,0-2.26,0V75.1a6.45,6.45,0,0,1-5.11-5C38.36,68,37.6,64.36,37,60.76c-.14-.76-.26-1.5-.37-2.23A43.54,43.54,0,0,1,36,52.65a2.72,2.72,0,0,1,0-.28c0-.68,0-1.47.1-2.32.45-6.25,2.11-16.28,2.13-16.39A1.13,1.13,0,1,0,36,33.3C36,33.75,34.51,42.54,34,48.85ZM45,87.74c-25.58,0-42.75-7-42.75-13.62,0-5.65,12.67-11.64,32.46-13.2.59,3.48,1.33,7.11,1.88,9.67a8.68,8.68,0,0,0,8.26,6.87h.37a8.69,8.69,0,0,0,8.27-6.87c.55-2.56,1.29-6.19,1.88-9.67,19.72,1.59,32.36,7.56,32.36,13.2C87.74,80.7,70.57,87.74,45,87.74Z" transform="translate(0 -3.2)"/>
        </svg>
      `
      new this.google.maps.Marker({
        position: this.userPosition,
        map: this.map,
        icon:{ url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(youAreHereMarkerIconSvgContent), scaledSize: new this.google.maps.Size(60, 60) }
      });
    },
    addShopMarker(position, basketSumPrice) {
      const displayPrice = `${basketSumPrice.toLocaleString()}`
      const oneCharacterPixelSpace = 18;
      const markerWidth = displayPrice.length * oneCharacterPixelSpace + 45
      const mySVG = `
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="44" viewBox="0 0 180 44">
            <rect id="svgRect" rx="9" ry="9" width="${markerWidth}" height="44" style="fill:#2e4369;"/>
            <g id="svgText">
              <text x="12" y="29" fill="white" font-size="20px" font-family="'Averta', Helvetica, Arial">${displayPrice} HUF</text>
            </g>
          </svg>
      `

      new this.google.maps.Marker({
        position: position,
        map: this.map,
        icon:{ url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(mySVG), scaledSize: new this.google.maps.Size(100, 100) }
      });
    }
  }
}
</script>

<style scoped>
.google-map{
  margin-bottom: -50px;
  width:100vw;
  height: 100vh;
}
</style>


