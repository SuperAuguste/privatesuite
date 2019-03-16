<template>
  <div id="app">
    <div id="nav">
      <MainNav/>
      <div class="background-lines-container">
        <div class="background-lines" v-for="i in 11" :key="i"> &nbsp;</div>
        </div>
<router-view/>
   <Footer class="footer"/>
      <!-- <News/> -->
    </div>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Page',
  components: {
    MainNav,
    Footer,
  },
  data () {
    return {
      
    }
  }
 
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 calc((100% / 11) - 7px);
}
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
  border: 0.1px solid white;
}
#nav {
  padding: 0px;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .footer {
  position: absolute;
  width: 100%;
  top: 0;
  margin-top: 60vh;
} */
</style>
