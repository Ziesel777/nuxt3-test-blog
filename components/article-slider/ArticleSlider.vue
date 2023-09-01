<template lang="pug">

section.article-slider
	.inner-container
		.article-slider__container
			.article-slider__btn.btn-prev
				.btn-arrow.btn-arrow--left( ref="btnPrev" )
			.article-slider__btn.btn-next
				.btn-arrow.btn-arrow--right( ref="btnNext" )

			.article-slider__slider.swiper( ref="articleSlider" )
				.article-slider__wrap.swiper-wrapper
					.article-slider__item.swiper-slide( v-for="item in imageList" )
						img.img( :src="item", alt="")
			.article-slider__counter {{ curIndex }}/{{ imageList.length }}

</template>
<style lang="scss" src="./article-slider.scss"></style>
<script setup>
import Swiper, { Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';

const props = defineProps({
	imageList: Array,
});

let slider = null;

let articleSlider = ref(null);
let btnPrev = ref(null);
let btnNext = ref(null);
let curIndex = ref(1);

onMounted(()=>{
	slider = new Swiper(articleSlider.value, {
		modules: [ Navigation ],
		loop: true,

		navigation: {
			prevEl: btnPrev.value,
			nextEl: btnNext.value,
		},

		on: {
			init: ()=>{ },
			slideChange: (slider)=>{
				curIndex.value = slider.realIndex+1;
			}
		},
	});
});

</script>