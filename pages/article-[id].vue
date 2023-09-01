<template lang="pug">

.article-detail
	template( v-for="item in body" :key="item.id" )
		.article-detail__block( v-if="item?.type=='article_intro_block'" )
			ArticleIntro( :data="item.data" )
		.article-detail__block( v-if="item?.type=='text_block'" )
			TextBlock( :content="item.data")
		.article-detail__block( v-if="item?.type=='image_block'" )
			ImageBlock( :data="item.data" )
		.article-detail__block( v-if="item?.type=='article_list_block'" )
			ArticleList( :list="item.data.articles", :title="item.data.title" )
		.article-detail__block( v-if="item?.type=='subscribe_form_block'" )
			.inner-container
				NewsletterForm
		.article-detail__block( v-if="item?.type=='cta_form_block'" )
			.inner-container
				FeedbackForm
		.article-detail__block( v-if="item?.type=='slider_block'" )
			ArticleSlider( :imageList="item.data" )

</template>

<style lang="scss">
.article-detail{
	&__block {
		padding: 50px 0;

		@include width-max(1199px){
			padding: 40px 0;
		}
		@include width-max(1023px){
			padding: 30px 0;
		}

		&:nth-of-type(1){
			padding-top: 0;
		}
		&:nth-last-of-type(1){
			padding-bottom: 0;
		}
	}
}
</style>

<script setup>
let route = useRoute();
let { data } = await useAsyncData('data', async () => $fetch(`https://devtwit8.ru/api/v1/page/?path=${route.path}`));
let { body, meta, page_type } = data.value;
let { title, description, slug } = meta;

useSeoMeta({ title, description });
console.log(body);

</script>