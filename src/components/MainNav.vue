<template>
  <div class="main-nav">
    
          <div class="menu">
            <!-- The title -->
            <h1> {{this.header}} </h1>
            <!-- The links -->
            <div class="menu-links-wrap">
            <div class="menu-links">
          
                
                <div class="links" v-for="(item, i) in this.links" :key="i">
                  <a class="dropdown" @click.prevent="toggleDropdown()" :href="item.url" v-if="item.title == 'Issues'" v-html="item.title" target="_blank"/>
                  <a :href="item.url" v-if="item.title != 'Issues'" v-html="item.title" target="_blank"/>
                </div>
            </div>
            
                <div class="children-links-container" v-if="showDropdown == true">
                  <div class="children-links" :style="{ width : computeDropdownSize(links.length) + '%'}" v-for="(item, i) in this.childrenLinks" :key="i" >
                    <a :href="item.url" v-html="item.title" target="_blank"/>
                </div>
                </div>
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
    let childrenLinks = []
    let showDropdown = false
  
      return {
        header,
        links,
        childrenLinks,
        showDropdown
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
  methods: {
    linkFetch() {
      this.$http.get('wp-api-menus/v2/menus/29').then((response) => {
        this.links = response.body.items;

        for(const i in this.links) {
          //there is no error but it's being stupid :(
          if (response.body.items[i].children.length > 0) {
           this.childrenLinks = response.body.items[i].children;
          }
        }

      });
    },
  toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      return this.showDropdown;
    },
 titleFetch() {
      this.$http.get('').then((response) => {
        this.header = response.body.name;
      });
    },

  computeDropdownSize(length) {
      return length = 100 / length;
    },


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
.menu-links-wrap {

  font-family: 'TSTAR Mono Round';
  margin: 2em 0px;
}
.menu-links{
  display: flex;
}
a {
  text-decoration: none;
}
.links {
  position: relative;
  display: inline-block;
  /* padding: 0em 3em; */
  margin: auto;
}
.link {
  position: relative;
}
.children-links-container {
  padding-top: 1em;
}
.children-links {
  display: block;
  text-align: center;
}
h1 {
  font-size: 5em;
  position: relative;
  margin-bottom: 5px;
}
</style>
