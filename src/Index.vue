<template>

  <div id="index" :class="[!preloader ? 'can-scroll' : false]">
    <div class="preloader" v-if="preloader" ><p class="loading">LOADING LOADING LOADING. preloader goes here. it will be something rad. but until then, it's this random screen</p></div>
    
      <router-view/>
    
  </div>
</template>

<script>
import { mapState } from 'vuex' 
const THREE = global.THREE = require('three');


export default {
  name: 'Index',
  components: {
  },
  beforeCreate() {
  // console.log(this.$http);
    this.$store.dispatch('loadData');
  },
  methods: {
     
  },
  mounted() {


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
  position: fixed;
  z-index:10;
}
.can-scroll {
  position: relative !important;
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
