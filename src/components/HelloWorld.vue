<template>
  <div class="hello">
    <div class="left">
      <h1>{{title}}</h1>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{ link }}
          </li>
      </ul>


      </div>


  <div class="right">

      </div>
  </div>
</template>

<script>

//helper that helps us access the data from the vue x
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  //computed array 

  // computed: mapState ({
  //   //this aliases the title from vuex to the name custom
  //   custom: 'title'
  // })

  computed:  {
    ...mapState([
      //this is for if you want to add other properties to computed
      'title',
      'links'
    ])
  }

  // computed: mapState ([
  //   'title'
  // ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
