<template>
<div>
        <div id="nav">

        <!-- Change this name to exactly the name of the page (i.e. about, issue, features) -->
            <div id="nameofPage">

                <!-- Outlined Heading -->
                <div class="title-container">
                    <h1 class="title-shadow" v-html="this.title"/>
                    <h1 class="title" v-html="this.title"/>
                </div>
                

                    <div v-for="(item, i) in this.url" :key="i" >
                        {{issuuEmbedCode(item.content.rendered.toString().split("\"")[1])}}

                        </div>
                        <div class="magazine" v-if="this.code">
                        <iframe :src="`https://e.issuu.com/embed.html?identifier=p84iarl6z3ae&amp;embedType=script#${this.code}`" style="border:none;width:100%;height:100%;" title="issuu.com" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" msallowfullscreen="">
                        </iframe>
                    </div>

   
		</div>


                </div>
            </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'IssuePage',
  components: {
  },
  data () {
    return {
      copy: '',
      url: '',
      code: '',
      title: ''
    }
  },
  mounted() {
      this.fetchIssue();
  },
  methods: {
    fetchIssue() {
        
        this.$http.get(`https://privatesuitemag.com/wp-json/wp/v2/pages/?slug='${this.$route.params.slug}'`).then((response) => {
            this.url = response.body;
            this.title = response.body[0].title.rendered;

         }).catch((e) => {
             console.log('noooo');
         });
    },
    issuuEmbedCode(code) {
        this.code = code;
    }
  },
  computed: mapState ([
    ''
  ]),
 
}
</script>

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl";
#nav {
  padding-top: 5em;
  }
.magazine
  width 80vw
  height 750px
</style>
