<template lang="pug">

form.feedback-form( @submit.prevent="submit", ref="form" )
	.feedback-form__container
		.feedback-form__img
			img.img( src="/img/feedback-form.jpg" )
		.feedback-form__content
			h2.h2.feedback-form__head-title Стань участником проекта
			.feedback-form__input-group
				.feedback-form__input: input.input( name="name", placeholder="Имя" )
				.feedback-form__input: input.input( name="phone", placeholder="Телефон" )
				.feedback-form__input: input.input( name="email", placeholder="Email" )
			.feedback-form__submit
				button.btn.btn--primary Присоединиться

</template>
<style lang="scss" src="./feedback-form.scss"></style>
<script setup>
let form = ref(null);
let inputsList = null;

onMounted(() => {
	inputsList = form.value.querySelectorAll('input');
});

function submit(e){
	let data = {};
	for(let item of inputsList){
		let { name, value } = item;
		data[name] = value;
	}
	console.log('submit', data);
}

</script>