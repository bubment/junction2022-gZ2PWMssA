<script>
import GoogleMapLoader from '../components/GoogleMapLoader.vue'

export default {
  name: 'GoogleMap',
  components: {
    GoogleMapLoader
  },
}
</script>

<template>
  <h1>Recomanndations view</h1>

  <GoogleMapLoader ref="mapLoader"/>
</template>
