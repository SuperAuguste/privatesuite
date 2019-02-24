<template>
  <div class="main-nav">
    
          <div class="menu">
            <!-- The title -->
            <h1> {{this.header}} </h1>
            <!-- The links -->
            <div class="menu-items" v-for="(idx, i) in this.navItems" :key="i">
              <a href="#" class="link"> {{idx.link}} </a>
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
     let navItems = [
          {
            link: 'Issue4'
          },
          {
            link: 'News'
          },
          {
            link: 'Reviews'
          },
          {
            link: 'Features'
          },
          {
            link: 'Fiction'
          },
          {
            link: 'Podcast'
          },
        ];

      return {
        navItems,
        header
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
  methods: {
    dataFetch() {
      this.$http.get('').then((response) => {
        this.header = response.body.name;
      });
    },
  },
  mounted() {
     this.dataFetch();
  },
  computed: { 
    // ...mapState ([
    //   'links',
    //   'title'
    // ]),
  }


}
</script>

<style  scoped>

@import "../stylesheets/styles.css";

.menu {
  position: relative
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
