<template>
	<div class="slice" style="padding-bottom: 0px;">
		
		<div class="content" v-html="this.content"></div>

	</div>
</template>

<script>

import { mapState } from 'vuex'

export default {

	name: "HomePagePreview",

	data() {

		return {

			content: "Loading preview..."

		}
  
	},

	// activated () {this.fetchPreview()},
	mounted () {

		this.fetchPreview();

	},

	methods: {
		
		fetchPreview () {

			this.$http.get(`https://privatesuitemag.com/wp-json/wp/v2/pages/?slug=main-page-preview`).then((response) => {
			
				// this.url = response.body;
				this.content = response.body[0].content.rendered;
				// console.log(this.content);

			}).catch((e) => {
			
				// Haha
		 		console.log('noooo');
			
			});

		}	

	},

	computed: mapState ([
		""
	])
	
}
</script>

<style lang="stylus">

@import "../stylesheets/styles.styl";

.content * {

	font-size: 2vw;

	a {

		color: blue;
		padding-left: 10px;

	}

}

</style>
