<template>
<div>
        <div id="nav">

        <!-- Change this name to exactly the name of the page (i.e. about, issue, features) -->
            <div id="credits">

                <!-- Outlined Heading -->
                <div class="title-container">
                    <h1 class="title-shadow">Credits</h1>
                    <h1 class="title">Credits</h1>
                </div>
            <div class="the-credits">

                <div class="credit" v-for="(item, i) in this.credits" :key="i"> 
                  <h3>{{item.title}}</h3>
                    <div v-for="(person, i) in item.people" :key="i"> 

                      <span class="person-title" v-html="person.title"/>
                      <span v-if="person.title"> : </span>
                        <a :href="person.social_link ? person.social_link : false" target="_blank"><span class="person" v-html="person.person"/></a>

                    </div>


                  </div>
                  </div>


            </div>

                </div>
            </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Credits',
  components: {
  },
  data () {
      let copy = ''
    return {
      copy
    }
  },
  computed: mapState ([
    'credits'
  ]),
 
}
</script>

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl";
#credits 
  text-align left

.the-credits 
  display flex
  flex-wrap wrap
  flex 1 1 160px
  @media screen and (max-width:768px) {
    display block
  }

.credit
  width 50%
  padding-bottom 2em
  @media screen and (max-width:768px) {
   width 100%
    
  }
</style>
