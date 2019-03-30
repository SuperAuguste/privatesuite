<template>
  <div id="app">
    <div id="nav">
      <MainNav/>
    <Background :mouseX="this.mouseX" :mouseY="this.mouseY" class="background"/>

<!--       
      <div class="background-lines-container">
        <div class="background-lines" v-for="i in 11" :key="i"> &nbsp;</div>
        </div> -->
<router-view/>
   <Footer class="footer"/>
      <!-- <News/> -->
    </div>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/Background.vue'

export default {
  name: 'Page',
  components: {
    MainNav,
    Footer,
    Background  

  },
  methods: {
    mouse() {
      this.window = document.getElementById('app');
      console.log(this.window);
      this.window.addEventListener('mouseover', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

      });
    }
  },
  mounted() {
   this.mouse();
  },
  data () {
    return {
      mouseX: 0,
      mouseY: 0
    }
  }
 
}
</script>

<style lang="stylus">

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 calc((100vw / 11) - 7px);
  /* border: 3px solid black; */
  width: 67vw;
  position absolute
  /* background: rgba(255, 255, 255, 0.521); */
  below($tablet)
    width 100vw

.background-lines-container {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.background-lines {
  width: calc(100% / 11);
  height: 100%;
  margin: auto;
  display: inline-block;
  border: 1px solid white;
  opacity: 0.8;
  z-index:-100;
}
#nav {
  padding: 0px;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.background {
  position: absolute;
  width:100vw;
  height:100vh;
  z-index:-3;
  // z-index:1000;
}
/* .footer {
  position: absolute;
  width: 100%;
  top: 0;
  margin-top: 60vh;
} */
</style>
