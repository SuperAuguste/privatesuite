<template>

  <div id="index" ref="index" :class="[!preloader ? 'can-scroll' : false]">

    <div class="preloader" v-if="preloader"><p class="loading">Loading</p></div>

      <router-view class="router"/>

  </div>
</template>

<script>
import { mapState } from 'vuex' 
import TweenLite from "gsap/TweenLite";

export default {
  name: 'Index',
  components: {
  },
  beforeCreate() {
  // console.log(this.$http);
    this.$store.dispatch('loadData');
  },
  data() {
    return {
     killPreloader: false,
     invisible: '',
     nodisplay:''
    }
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
  position: fixed;
  z-index:100;
  width: 101vw;
  overflow: hidden;
  display:flex;
  margin:auto;
  top: -1vh;
  left: -1vh;
  height: 101vh;
  background: white;
  display: 1;
  transition: opacity 1s linear;

}
.loading {
  color:black;
  position: relative;
  z-index:101;
  margin:auto;
}

</style>
