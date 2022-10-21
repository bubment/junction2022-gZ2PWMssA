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
      googleApiKey: ''
    };
  },

  async mounted() {
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
      this.addSampleMarker()
    },
    addSampleMarker() {
      const tempCost = 23122
      const mySVG = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 180 44" style="enable-background:new 0 0 180 44;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:#0097C7;}
            .st1{font-family:'AvertaDemoPECuttedDemo-Regular';}
            .st2{font-size:30px;}
          </style>
          <path class="st0" d="M171,44H9c-5,0-9-4-9-9V9c0-5,4-9,9-9h162c5,0,9,4,9,9v26C180,40,176,44,171,44z"/>
          <text transform="matrix(1 0 0 1 21.4214 32.9702)" class="st1 st2">${tempCost.toLocaleString()} Ft</text>
        </svg>
      `

      new this.google.maps.Marker({
        position: { lat: 47.4848873, lng: 19.076491 },
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


