<template>
<div>


       
        <div id="nav">

            <div id="about">


                <div class="title-container">
                    <h1 class="title-shadow">{{this.title}}</h1>
                    <h1 class="title">{{this.title}}</h1>
                </div>
                <p v-html="this.copy"/>
                

            </div>

                </div>
            </div>
</template>

<script>

import Page from '@/Page.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
   Page,
   Footer
  },
  data () {
      let copy = ''
      let title = ''
    return {
      copy,
      title
    }
  },
    methods: {
    fetchData() {
      this.$http.get('wp/v2/pages/167').then((response) => {
       this.copy = response.body.content.rendered;
       console.log(this.copy);
       this.title = response.body.title.rendered;
      });
    },
    },
    mounted() {
        this.fetchData();
    }
 
}
</script>

<style>

@import "../stylesheets/styles.css";
#about {
  width: calc(5/9 * 100%);
  padding: 4em calc(1/9 * 100%);
}

</style>
