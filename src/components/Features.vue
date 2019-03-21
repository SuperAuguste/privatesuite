<template>
    <div class="slice">
        <div class="post-wrap">
            <div class="features">
                 <div class="title-container">
                    <h1 class="title-shadow">Features</h1>
                    <h1 class="title">Features</h1>
                </div>
                <div class="post-title-wrap">
                    <transition class="post-title" v-for="(idx, i) in this.postBody" :key="i">
                       <div class="slider" v-if="idx.link.includes('features')">
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
  name: 'Features',

  data() {

      return {
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
    computed: mapState ([
      'postBody'
    ])
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
  opacity: 0.5;
  width: calc((2 / 3) * 100%);
}
.reviews, .features {
    padding: 3em 0;
}
.slider {
    width: calc((3 / 9) * 100%);
}
.news .slider {
    width: calc((5 / 9) * 100%);
}
.news .image {
    width: calc((5 / 9) * 100%);
    position: relative;
      height: 100%;
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
/* .title:before {
    content: 'Reviews';
    position: absolute;
    padding: 3px;
    opacity: 0.3;
} */
h4 {
  text-align: left;
}
.copy {
  margin-right: calc(((1 / 9) * 100%) * 3);
}
</style>
