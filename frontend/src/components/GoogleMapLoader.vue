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


