<template lang="pug">

.soc-links
	.soc-links__wrap
		a.soc-links__item( v-for="item in socList" :key="item.id" :href="item.link" )
			svg.ico: use( :xlink:href="`/img/sprite-icon.svg#${item.ico}`" )
			//- img.img( :src="item.src" )

</template>
<style lang="scss" src="./soc-links.scss"></style>

<script setup>
let socList = [
	{
		id: helper.hash,
		src: '/img/soc-links/facebook.svg',
		ico: 'facebook',
		link: '#'
	},
	{
		id: helper.hash,
		src: '/img/soc-links/vk.svg',
		ico: 'vk',
		link: '#'
	},
	{
		id: helper.hash,
		src: '/img/soc-links/instagram.svg',
		ico: 'instagram',
		link: '#'
	},
	{
		id: helper.hash,
		src: '/img/soc-links/telegram.svg',
		ico: 'telegram',
		link: '#'
	},
];

</script>