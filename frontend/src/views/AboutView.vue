<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>A legfontosabb dolog a földön: {{name}}</h2>
    <button @click="getAbout()">Valóság</button>
  </div>
  <TemplateBox message="Asd!" submessage=""></TemplateBox>
  <TemplateBox message="Kek!" submessage=""></TemplateBox>
</template>

<style>
</style>
<script>
import backendService from '../services/backend-service'
import TemplateBox from '@/components/TemplateBoxComponent.vue';

export default {
  name: 'About',
  data() {
    return {
      name:'Te'
    };
  },
  components:{ TemplateBox },
  methods: {
    getAbout: async function(){
      const about = (await backendService.getAbout()).data;
      this.name = about.name;
    }
  }
}

</script>
