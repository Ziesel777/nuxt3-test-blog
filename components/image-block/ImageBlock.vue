<template lang="pug">

section.image-block
	.inner-container.image-block__container
		.image-block__img
			img.img( :src="srcImage", :alt="caption" )
		.image-block__title( v-if="caption" ) {{ caption }}

</template>
<style lang="sass" src="./image-block.scss"></style>
<script setup>

const props = defineProps({
	data: Object,
});
let srcImage = computed(()=>props.data.src);
let caption = computed(()=>props.data.caption);

</script>