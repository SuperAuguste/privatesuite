<template>
    <div class="slice">
        <div class="post-wrap">

          

            <div class="fiction">
                <!-- <div class="title-container">
                    <h1 class="title-shadow">Fiction</h1>
                    <h1 class="title">Fiction</h1>
                </div> -->
                  <!-- {{postBody}} -->
                <div class="post-title-wrap">
                    <transition class="post-title" v-for="(idx, i) in this.postBody" :key="i">

                        <div class="slider" v-if="idx.link.includes('fiction')">

                          <div class="image"/>
                <router-link :to="idx.link.replace('https://privatesuitemag.com', '')">

                          <div class="copy">
                            <h4 v-html="idx.title.rendered"/>
                            <p v-html="idx.content.rendered.slice(0,150) + '...'"/>
                          </div>
                 </router-link>

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
  name: 'Fiction',

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
  position: absolute;
  width: 100%;
  background-color: pink;
  opacity: .5;
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
  margin-left: calc(((1 / 9) * 100%) * 3);
}
</style>
