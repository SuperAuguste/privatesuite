<template>
  <div class="home">
    <router-view/>
<HomePagePreview/>
<Fiction/>
<News/>
<Reviews/>
<Features/>

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
import HomePagePreview from '@/components/HomePagePreview.vue'


export default {
  name: 'home',
  components: {
    MainNav,
    Features,
    Fiction,
    News,
	Reviews,
	HomePagePreview
  }
}
</script>
