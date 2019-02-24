<template>
  <div class="main-nav">
    
          <div class="menu">
            <!-- The title -->
            <h1> {{this.header}} </h1>
            <!-- The links -->
            <div class="menu-items" v-for="(link, i) in this.links" :key="i">
              <a :href="link.url" v-html="link.title" target="_blank"/>
            </div>

         </div>
      </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'MainNav',

  data() {
    let header = ''
    let links = []
    

      return {
        links,
        header,
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
  methods: {
    linkFetch() {
      this.$http.get('wp/v2/pages/?slug=homepage').then((response) => {
        this.links = response.body[0].acf.links;titleFetch
      });
    },
 titleFetch() {
      this.$http.get('').then((response) => {
        this.header = response.body.name;
      });
    }


  },
  mounted() {
     this.linkFetch();
       this.titleFetch();
  },
  computed: { 
    // ...mapState ([
    //   'links',
    //   'title'
    // ]),
  },
}
</script>

<style  scoped>

@import "../stylesheets/styles.css";

.menu {
  position: relative;
  width: 100%;
}
a {
  text-decoration: none;
}
.menu-items {
  font-family: 'TSTAR Mono Round';
  position: relative;
  display: inline-block;
  padding: 0em 3em;
}
.link {
  position: relative;
}
h1 {
  text-transform: uppercase;
  font-size: 5em;
  position: relative;
  margin-bottom: 5px;
}
</style>
