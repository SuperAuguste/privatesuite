<template>
<div>
        <div id="nav">
            <div id="post">
            {{toggleData(this.$route.params.slug)}}

                <!-- show ALL THE TIME -->
                <div class="title-container">
                    <h1 class="title-shadow">{{this.$route.params.slug}}</h1>
                    <h1 class="title">{{this.$route.params.slug}}</h1>
                </div>
             

            <!-- show this if on the main post page. -->
            <div v-if="this.onIndexPage">
                <Features v-if="this.$route.params.slug === 'features'"/>
                <Fiction v-if="this.$route.params.slug === 'fiction'"/>
                <News v-if="this.$route.params.slug === 'news'"/>
                <Reviews v-if="this.$route.params.slug === 'reviews'"/>
            </div>

                <!-- show if on specific post -->
             <div v-if="!this.onIndexPage">
                <div class="post-title" >
                <h1 v-html="this.postTitle"></h1>
                </div>
                <p class="postcopy" v-html="this.copy" v-if="this.copy && this.renderContent"/>
                <p v-else-if="!this.title"> This content does not exist or does not exist yet.</p>
              </div>
            </div>

        </div>
    </div>
</template>

<script>

import Page from '@/Page.vue'
import Footer from '@/components/Footer.vue'
import Features from '@/components/Features.vue'
import Fiction from '@/components/Fiction.vue'
import News from '@/components/News.vue'
import Reviews from '@/components/Reviews.vue'

export default {
  name: 'PostPage',
  components: {
   Page,
   Footer,
    Features,
   Fiction,
   News,
   Reviews
  },
  data () {
    return {
      API: [this.$api,"wp/v2/posts/?slug=",this.$route.params.slug].join(''),
      copy: '',
      postTitle: '',
      link: '',
      renderContent: false,
      title: '',
      onIndexPage: false,
      posts: [ 
       'fiction',
       'features',
       'news',
       'reviews'
      ]
    }
  },
  mounted() {
    this.loadDataBySlug();
    this.checkPostType();
  },
    methods: {
      loadDataBySlug() {
       this.$http.get(this.API).then((response) => {
        this.link = response.body[0].link;
        this.postTitle = response.body[0].title.rendered;
        this.copy = response.body[0].content.rendered;
        if (this.link.includes(this.$route.path)) {
          this.renderContent = true;
        }
      });

      },
    checkPostType() {
      for (let i in this.posts) {
        if (this.posts[i] === this.$route.path.split("/")[1]) {
            this.title = this.$route.path.split("/")[1];
            return;
        }
      }
    },
    toggleData(slug) {
      if (this.posts.indexOf(slug) > -1) {
        this.onIndexPage = true;
      }
    }
    },
 
}
</script>

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl";

.postcopy p{
  font-size: 1.5em;
}
.post-title h1 {
  text-align: left;
}
#nav {
  padding-top: 5em;
  }
</style>
