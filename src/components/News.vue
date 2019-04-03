<template>
    <div class="slice">
        <div class="post-wrap">

          
 <div class="news">
            
                <div class="title-container" v-if="!this.$route.params.slug">
                    <h1 class="title-shadow">News</h1>
                    <h1 class="title">News</h1>
                </div>
                <div class="post-title-wrap">
                   <!-- <div class="image"/> -->
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
  name: 'News',

  data() {

      return {
      }
  },
  methods: {
    sortedPosts(link) {
      if (link.toString().includes('news')) {
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

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl"
.post-title-wrap 
    display flex
    flex-wrap wrap
    margin auto

.post-wrapnth-child(even) > .slider
      width calc((2 / 9) * 100%)

.image {
  height: 100%;
  position: absolute;
  width: 200%;
  /* border: 3px solid lightgrey; */
  background-color: pink;
  opacity: .5;
  width: calc((2 / 3) * 100%);
}

// .image 
//     height 15em
//     width 5em
//     background-color pink
//     opacity .5
//     width calc((5 / 9) * 100%)

.slider 
    width calc((5 / 9) * 100%)
    /* height 20em */
    margin-bottom 5em   
  


.title-container h1
    font-size 4em
    margin-bottom 0
    text-align left
    margin-top 0
    -webkit-text-stroke 1px black
    -webkit-text-fill-color transparent
    
.title-shadow 
    position absolute
    padding 3px
    opacity 0.3

h4 
  text-align left
.copy {
  margin-left: calc(((1 / 9) * 100%) * 3);
}

@media screen and (max-width:768px)
  .slider,.image
    width 100%

</style>
