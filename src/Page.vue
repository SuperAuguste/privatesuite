<template>
  <div id="app">
    <div id="nav">

      <div class="nav-switch-space" v-if="this.isMobile">
        <div class="nav-switch" :class="dropdown ? 'open' : false"/>
               <div class="dropdown" @click="toggleDropDown()">
               <svg xmlns="http://www.w3.org/2000/svg" :class="dropdown ? 'open' : false" viewBox="0 0 165.33 185.63"><path d="M82.67,185.63,0,103,22.63,80.33l43.54,43.54V0h32V124.87l44.54-44.54L165.33,103ZM1.41,103l81.26,81.25L163.92,103,142.71,81.75,97.17,127.29V1h-30V126.29L22.63,81.75Z"/></svg>
              </div>
       <MainNav class="main-nav-mobile" v-if="dropdown"/>

       </div>



        <div class="title">
           <div class="outline"><router-link to="/">{{title}}</router-link></div>
           <div class="fill">{{title}}</div>


           </div>
      <MainNav class="main-nav" v-if="!this.isMobile"/>
    <Background :mouseX="this.mouseX" :mouseY="this.mouseY" class="background"/>

<router-view/>
   <Footer class="footer"/>
    </div>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/Background.vue'
import { mapState } from 'vuex'


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
    },
    toggleDropDown() {
      this.opened = !this.opened;
      this.$store.commit('updateDropdown', this.opened);
    },
    showDropdown() {
              if (window.innerWidth < 768) {
          this.isMobile = true;
        } else {
          this.isMobile = false;

        }
      window.addEventListener(('resize'), e => {
        if (window.innerWidth < 768) {
          this.isMobile = true;
        } else {
          this.isMobile = false;

        }
      });
    }
  },
  mounted() {
   this.mouse();
   this.showDropdown();
  },
    computed: mapState ([
      'title',
      'dropdown'
    ]),
  data () {
    return {
      mouseX: 0,
      mouseY: 0,
      isMobile:false,
      opened:false
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
  width: calc(90vw - calc((100vw / 11) - 7px));
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
.title .outline{
  margin: 0;
  text-align: left;
              -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
      line-height: 1em;
      padding-top: .25em;
  border-bottom: 1px black solid;
    
}
.outline, .fill{
  font-size:15vw;
  }
.title {
  font-size: 1em;
  position: relative;
  margin-bottom: 5px;
  font-family: 'Campton Bold Italic';
  text-transform: uppercase;
}
.title .fill{
  margin: 0;
  text-align: left;
  line-height: 1em;
  padding-top: .25em;
  color: lightblue;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index:-1;
}
.main-nav {
  z-index: 5;

  }
.nav-switch-space, .nav-switch {
  height: 5em;
   border-bottom: 1px black solid;
  }
.nav-switch {
  position:absolute;

  top: -5em;
  left: -100vw;
  width: 200vh;
  z-index:5;
  height: 10em;
  transition: height 1s ease;
  background: white;

    &.open {
      height:140vh;
      }
  }
svg {
  width: 4em;
  position: relative;
  top: 0;
  z-index:6;
  transition transform 0.5s ease;
  &.open {
    transform: rotateZ(180deg);
    }
  }
  .dropdown {
    position:relative;
    width:95%;
    cursor:pointer;
    }
</style>
