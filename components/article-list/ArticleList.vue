<template lang="pug">

section.article-list
	.inner-container.article-list__container
		h2.h2.article-list__head-title( v-if="title" ) {{ title }}
		.article-list__wrap
			.article-list__item( v-for="item in list" :key="item.id" )
				ArticleCard( :data="item" )

</template>
<style lang="scss">
.article-list{
	&__container{}
	&__head-title{
		padding-bottom: 50px;

		@include width-max(1199px){
			padding-bottom: 30px;
		}
	}
	&__wrap{
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
	}
	&__item{
		$col: 3;
		width: calc((100% - 30px*#{$col - 1})/#{$col} );

		@include width-max(1023px){
			$col: 2;
			width: calc((100% - 30px*#{$col - 1})/#{$col} );
		}
		@include width-max(767px){
			$col: 1;
			width: calc((100% - 30px*#{$col - 1})/#{$col} );
		}
	}
}
</style>
<script setup>

const props = defineProps({
	title: String,
	list: Array,
});

</script>