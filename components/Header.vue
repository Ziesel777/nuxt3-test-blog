<template lang="pug">

header.header
	.inner-container.header__container
		.header__main-logo
			img.img( src="/img/main-logo.svg" )

</template>

<style lang="scss">
.header{
	&__container{
		@include flex-ctr;
		min-height: 85px;

		padding-top: 25px;
		padding-bottom: 25px;
	}
	&__main-logo{
		@include main-logo;
	}
}
</style>