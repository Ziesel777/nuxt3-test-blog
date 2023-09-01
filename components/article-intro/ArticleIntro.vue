<template lang="pug">

section.article-intro
	.inner-container.article-intro__container
		.article-intro__img
			img.img( :src="srcImage", :alt="headTitle" )
		.article-intro__content
			h1.h1.article-intro__head-title {{ headTitle }}
			.article-intro__info
				.article-intro__info-read-time
					img.ico( src="/img/ui-icon/time.svg" )
					span {{ readTime }} мин время чтения
				.article-intro__info-view-counter
					img.ico( src="/img/ui-icon/eye.svg" )
					span {{ viewCount }} прочитали статью
				.article-intro__desc {{ shortDesc }}

</template>
<style lang="scss" src="./article-intro.scss"></style>
<script setup>

const props = defineProps({
	data: Object,
});
let headTitle = computed(()=>props.data.title);
let srcImage = computed(()=>props.data.image);
let readTime = computed(()=>props.data.reading_time);
let shortDesc = computed(()=>props.data.short_description);
let viewCount = computed(()=>props.data.views_count);

</script>