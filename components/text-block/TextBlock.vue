<template lang="pug">

section.text-block
	.inner-container.text-block__container
		.text-block__content( v-html="content" )

</template>
<style lang="scss" src="./text-block.scss"></style>
<script setup>
const props = defineProps({ content: String });
</script>