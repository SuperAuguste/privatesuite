<template>
<div>
    <Page/>
     <div id="app">
        <div id="nav">

        <!-- Change this name to exactly the name of the page (i.e. about, issue, features) -->
            <div id="nameofPage">

                <!-- Outlined Heading -->
                <div class="title-container">
                    <h1 class="title-shadow">About</h1>
                    <h1 class="title">About</h1>
                </div>

             <p>dsadas</p>


            </div>

                </div>
            </div>
        <Footer/>
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
    return {
      copy
    }
  },
    methods: {
    fetchData() {
      this.$http.get('wp/v2/pages/167').then((response) => {
       this.copy = response.body;
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

</style>
