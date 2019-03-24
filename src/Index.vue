<template>
  <div id="index">
    <div class="preloader" v-if="!preloader"><p class="loading">LOADING LOADING LOADING. preloader goes here. it will be something rad. but until then, it's this random screen</p></div>
    <Background/>
    
      <router-view/>
    
  </div>
</template>

<script>
import Background from '@/Background.vue'
import { mapState } from 'vuex' 


export default {
  name: 'Index',
  components: {
    Background  
  },
  mounted() {
  // console.log(this.$http);
    this.$store.dispatch('loadData');
  },
    computed: mapState ([
      'preloader'
    ])

 
}
</script>

<style>
#index {
  /* background:white; */
  height: 100vh;
  position: absolute;
}
.preloader {
  position: absolute;
  z-index:100;
  width: 200vh;
  overflow: hidden;
  display:flex;
  margin:auto;
  top: -1vh;
  left: -1vh;
  height: 101vh;
  background: white;
}
.loading {
  color:black;
  position: relative;
  z-index:101;
  margin:auto;
}
</style>
