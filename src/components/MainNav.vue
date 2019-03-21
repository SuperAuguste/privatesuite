<template>
  <div class="main-nav">
    
          <div class="menu">
            <!-- The title -->
           <h1>{{title}}</h1>
            <!-- The links -->

            <div class="menu-links-wrap">
            <div class="menu-links">
          
                
                <div class="links" v-for="(item, i) in this.links" :key="i">
                  <a class="dropdown" @click.prevent="toggleDropdown()" :href="item.url" v-if="item.title == 'Issues'" v-html="item.title" target="_blank"/>
                  <a :href="item.url" v-if="item.title != 'Issues'" v-html="item.title" target="_blank"/>
                </div>
            </div>
            
                <div class="children-links-container" v-if="showDropdown == true">
                  <div class="children-links" :style="{ width : computeDropdownSize(links.length) + '%'}" v-for="(item, i) in this.linkChildren" :key="i" >
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
  position: absolute;
  width: 100%;
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
