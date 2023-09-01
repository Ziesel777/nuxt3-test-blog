<template lang="pug">

form.newsletter-form( @submit.prevent="submit" )
	.newsletter-form__container
		.newsletter-form__label Подпишись на рассылку
		.newsletter-form__group
			.newsletter-form__input
				input.input( name="email", placeholder="Email", v-model="email" )
			.newsletter-form__submit
				button.btn.btn--primary Подписаться

</template>
<style lang="scss" src="./newsletter-form.scss"></style>
<script setup>
let email = ref('');

function submit(e){
	let data = { email: email.value };
	console.log('submit', data);
}

</script>