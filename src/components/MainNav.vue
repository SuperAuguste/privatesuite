<template>
  <div class="main-nav">
          <div class="menu">
            <!-- The title -->
          
            <!-- The links -->

            <div class="menu-links-wrap">

                <div class="menu-links">
                      <div class="links" v-for="(item, i) in this.links" :key="i">
                        <a class="dropdown" @click.prevent="toggleDropdown()" :href="item.url" v-if="item.title == 'Issues'" v-html="item.title" target="_blank"/>
                        <!-- <a :href="item.url.replace('https://privatesuitemag.com', '')" v-if="item.title != 'Issues'" v-html="item.title" /> -->
                        <router-link :to="item.url.replace('https://privatesuitemag.com', '')" v-if="item.title != 'Issues'" v-html="item.title" />

                      </div>
                        <a href="https://www.patreon.com/privatesuitemag" target="_blank">Subscribe</a>

                  </div>
              
                  <div class="children-links-container" v-if="showDropdown == true">
                      <div class="children-links" v-for="(item, i) in this.linkChildren" :key="i" >
                        <a :href="`/issues/${item.object_slug}`" v-html="item.title"/>
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
    let showDropdown = false
  
      return {
        showDropdown
      }
  },
  // grabbing the values from wordpress, and assigning them to the variables
  methods: {
    
  toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      return this.showDropdown;
    },

  computeDropdownSize(length) {
      return length = 100 / length;
    },
  },
  mounted() {
  },
  computed: mapState ([
      'title',
      'links',
      'linkChildren'
    ])
}
</script>

<style scoped>

@import "../stylesheets/styles.styl";
.title {
  /* position:fixed; */

    /* white-space: nowrap; */
    padding-bottom: 4em;
}
.main-nav {
  background: white;
}


.menu {
  position: relative;
  width: 100%;
}
.menu-links-wrap {
    position: fixed;
    right: 2em;
    top: 2em;
  font-family: 'TSTAR Mono Round';
}
  @media screen and (max-width:768px) {
   .menu-links-wrap {
     position:absolute;
   }
    
  }

.menu-links{
     text-align: right;
  /* position:absolute; */


}
a {
  text-decoration: none;
}
.links {
  position: relative;
  /* display: inline-block; */
  /* padding: 0em 3em; */
  margin: 1em 0;
}
.link {
  position: relative;
}
.children-links-container {
  padding-top: 1em;
  border-top: 1px black solid;
  position: absolute;
  width: 100%;
}
.children-links {
  display: block;
  text-align: center;
  padding: .5em 0;
}


</style>
