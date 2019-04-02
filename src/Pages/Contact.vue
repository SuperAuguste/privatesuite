<template>
<div>
        <div id="nav">

        <!-- Change this name to exactly the name of the page (i.e. about, issue, features) -->
            <div id="contact">

                <!-- Outlined Heading -->
                <div class="title-container">
                    <h1 class="title-shadow">Contact</h1>
                    <h1 class="title">Contact</h1>
                </div>

             <div v-html="contact[0].content.rendered"/>


            </div>

                </div>
            </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Contact',
  components: {
  },
  data () {
    return {
    }
  },
  computed: mapState ([
    'contact'
  ]),
 
}
</script>

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl";
#contact
  padding-top 5em
</style>
