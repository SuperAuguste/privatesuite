<template>
  <div id="app">
    <div id="nav">
      <div class="background-lines-container">
        <div class="background-lines" v-for="i in 11" :key="i"> &nbsp;</div>
      
        </div>
      <MainNav/>
      <Footer/>
      <!-- <News/> -->
    </div>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import News from '@/components/News.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    News,
    Footer
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
</style>
