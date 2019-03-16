<template>
        <div id="nav">
    <div class="footer">
        <div class="copy">
          <div class="title">
              <h1>{{this.title}}</h1>
              </div>
            <div class="body">
                <p>{{this.footerCopy}}</p>
                <h3> <a :href="['mailto:' + this.email]" v-html="this.email"/></h3>
                <div class="social-icons">
                  <div class="social-icon" v-for="(item, idx) in this.socialLinks" :key="idx">
                    <a :href="item.social_link.url" target="_blank"><img :src="item.social_media.url"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Footer',

  data() {
    let footerCopy = ''
    let title = ''
    let email = ''
    let socialLinks = []

      return {
        footerCopy,
        title,
        email,
        socialLinks
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
  methods: {
    footerInputFetch() {
      this.$http.get('acf/v3/options/options').then((response) => {
       this.footerCopy = response.body.acf.footer_text;
       this.email = response.body.acf.email.title;
       this.socialLinks = response.body.acf.social_links;
      });
    },
     titleFetch() {
      this.$http.get('').then((response) => {
        this.title = response.body.name;
      });
    },
  },
  mounted() {
     this.footerInputFetch();
     this.titleFetch();
  },
  computed: { 
    // ...mapState ([
    //   'links',
    //   'title'
    // ]),
  },
}
</script>

<style  scoped>

@import "../stylesheets/styles.css";

.social-icons {
  display: flex;
  width: 50%;
}
 .social-icon {
display: flex;
margin-right: auto;
  }
.body {
  width: calc(3 / 9 * 100%);
  float: right;
}
.title {
  width: calc(6 / 9 * 100%);
  top: 0;
}
h1 {
  font-size: 4em;
  text-align: left;
  margin-top: 0;
}
h3 {
  text-align: left;
}
.copy {
  display: flex;
}
.footer {
  padding-top: 5em;
}
</style>
