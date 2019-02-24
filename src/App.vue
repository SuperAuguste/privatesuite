<template>
  <div id="app">
    <div id="nav">
      <MainNav/>
      <News/>
    </div>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import News from '@/components/News.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    News
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
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
