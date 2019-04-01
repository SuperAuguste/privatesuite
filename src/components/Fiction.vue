<template>
    <div class="slice">
        <div class="post-wrap">

          

            <div class="fiction">
                <div class="title-container"  v-if="!this.$route.params.slug">
                    <h1 class="title-shadow">Fiction</h1>
                    <h1 class="title">Fiction</h1>
                </div>
                
                <div class="post-title-wrap">
                    <transition class="post-title" v-for="(idx, i) in this.postBody" :key="i">

                        <div class="slider" v-if="sortedPosts(idx.link)">

                          <div class="image"/>
                          <a :href="idx.link.replace('https://privatesuitemag.com', '')">

                          <div class="copy">
                            <h4 v-html="idx.title.rendered"/>
                            <p v-html="idx.content.rendered.slice(0,150) + '...'"/>
                          </div>
                 </a>

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
    methods: {
    sortedPosts(link) {
      if (link.toString().includes('fiction')) {
        return true;
      }
    }
  },
  //grabbing the values from wordpress, and assigning them to the variables

  computed: mapState ([
    'postBody'
  ]),
}
</script>

<style lang="stylus"  scoped>

@import "../stylesheets/styles.styl";
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
    width: 50%;
    margin-bottom: 5em;
}
@media screen and (max-width:768px) {
  .slider {
    width: 100%;
}
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
