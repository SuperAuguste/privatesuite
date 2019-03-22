<template>
<div>
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
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'About',
  components: {
  },
  data () {
      let copy = ''
    return {
      copy
    }
  },
  computed: mapState ([
    ''
  ]),
 
}
</script>

<style>

@import "../stylesheets/styles.css";

</style>
