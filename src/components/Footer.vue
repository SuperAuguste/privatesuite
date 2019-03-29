<template>
        <div id="nav">
    <div class="footer">
        <div class="copy">
          <div class="title">
              <h1>{{title}}</h1>
              </div>
            <div class="body">
                <p>{{footer.footer_text}}</p>
                <!-- <h3> <a :href="['mailto:' + footer.email.title]" v-html="footer.email.title"/></h3> -->
                <div class="social-icons">
                  <div class="social-icon" v-for="(item, idx) in this.footer.social_links" :key="idx">
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

      return {
      }
  },
  //grabbing the values from wordpress, and assigning them to the variables
    computed: mapState ([
      'footer',
      'title'
    ])
}
</script>

<style lang="stylus" scoped>

@import "../stylesheets/styles.styl";

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
