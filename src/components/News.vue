<template>
    <div class="slice">
        <div class="post-wrap">

          
 <div class="news">
            
                <div class="title-container">
                    <h1 class="title-shadow">News</h1>
                    <h1 class="title">News</h1>
                </div>
                <div class="post-title-wrap">
                    <transition class="post-title" v-for="(idx, i) in this.postBody" :key="i">
                      <div class="slider" v-if="idx.link.includes('news')">
                        <div class="image"/>
                        <div class="copy">
                          <h4 v-html="idx.title.rendered"/>
                          <p v-html="idx.content.rendered.slice(0,150) + '...'"/>
                        </div>
                    </div>
                    </transition>
                </div>
            </div>
            


            </div>

    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'News',

  data() {

      return {
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
  computed: mapState ([
    'postBody'
  ]),
}
</script>

<style  scoped>

@import "../stylesheets/styles.css";
.post-title-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
}
.post-wrap:nth-child(even) > .slider{
      width: calc((2 / 9) * 100%);
}
.image {
    height: 100%;
    position: relative;
    width: 100%;
    background-color: pink;
    opacity: .5;
    width: calc((5 / 9) * 100%);
}
.slider {
    width: calc((5 / 9) * 100%);
    height: 20em;
    margin-bottom: 5em;  
}
.title-container h1{
    font-size: 4em;
    margin-bottom: 0;
    text-align: left;
    margin-top: 0;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
    
}
.title-shadow {
    position: absolute;
    padding: 3px;
    opacity: 0.3;
}
h4 {
  text-align: left;
}
.copy {
  width: 50%;
}
</style>
