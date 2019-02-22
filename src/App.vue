<template>
  <div id="app">
    <div id="nav">
      <p v-html="this.title"/>
      <MainNav/>
    </div>
    <router-view/>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'

export default {
  name: 'HelloWorld',
  components: {
    MainNav
  },
  data () {
    
    return {
      title: '',
      msg: 'Welcome to Your Vue.js App',
      projects:[]
    }
  },
  mounted() {
    this.dataFetch();
  },
  //cannot "output an action" if you try <p vhtml="dataFetch()". You want to output theresult. Therefore, run it in mounted.
  methods: {
    dataFetch() {
      this.$http.get('').then((response) => {
        this.title = response.body.name;
        // console.log(this.title);
        // return this.title;
      });
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
