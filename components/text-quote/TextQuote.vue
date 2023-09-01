<template lang="pug">

.text-quote
	.text-quote__ico: svg.ico: use( xlink:href="/img/sprite-icon.svg#quote" )
	.text-quote__container
		.text-quote__content: q
			slot
		.text-quote__author
			.text-quote__author-name( v-if="author?.name" ) {{ author.name }},
			.text-quote__author-activity( v-if="author?.activity" ) {{ author.activity }}

</template>
<style lang="scss" src="./text-quote.scss"></style>
<script setup>
const props = defineProps({
	author: Object,
});
</script>