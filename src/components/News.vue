<template>
  <div class="news">
    <div class="card">
        <p class="article"> sdfds</p>
        </div>
        <div class="card">
        <p class="article"> sdfds</p>
        </div>    
        <div class="card">
        <p class="article"> sdfds</p>
        </div>
        
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'MainNav',

  data() {
     
      return {
      }
  },
  computed: { 
  }
}
</script>

<style scoped>
.card {
    background-color: gray;
    display: block;
    position: relative;
}
.article {

    width: (100% / 3);
}
</style>
