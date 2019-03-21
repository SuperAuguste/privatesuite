<template>
  <div class="home">
    <router-view/>
  THIS IS HOME PAGE WOO HOO
<Features/>
<Fiction/>
<News/>
<Reviews/>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/MainNav.vue'
import Features from '@/components/Features.vue'
import Fiction from '@/components/Fiction.vue'
import News from '@/components/News.vue'
import Reviews from '@/components/Reviews.vue'



export default {
  name: 'home',
  components: {
    MainNav,
    Features,
    Fiction,
    News,
    Reviews
  }
}
</script>
