<template lang="pug">

.article-card
	.article-card__img
		img.img( :src="img" )
	h3.h3.article-card__title {{ title }}
	.article-card__btn
		nuxt-link( :to="link" class="btn") Читать
		//- a.btn( :href="link" ) Читать

</template>
<style lang="scss" src="./article-card.scss" ></style>

<script setup >

const props = defineProps({ data: Object });
const img = computed(()=>props.data.image);
const title = computed(()=>props.data.title);
const link = computed(()=>props.data.link);

</script>