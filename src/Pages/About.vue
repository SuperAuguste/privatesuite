<template>
<div>
        <div id="nav">

            <div id="about">


                <div class="title-container">
                    <h1 class="title-shadow">{{about.title.rendered}}</h1>
                    <h1 class="title">{{about.title.rendered}}</h1>
                </div>
                <p v-html="about.content.rendered"/>
                

            </div>

                </div>
            </div>
</template>

<script>

import Page from '@/Page.vue'
import Footer from '@/components/Footer.vue'
import { mapState } from 'vuex'


export default {
  name: 'About',
  components: {
   Page,
   Footer
  },
  data () {
    return {
    }
  },
    computed: mapState ([
      'about'
    ])
 
}
</script>

<style>

@import "../stylesheets/styles.css";
#about {
  width: calc(5/9 * 100%);
  padding: 4em calc(1/9 * 100%);
}

</style>
