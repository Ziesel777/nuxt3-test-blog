<template lang="pug">

footer.footer
	.inner-container.footer__container
		.footer__top
			.footer__main
				.footer__main-logo
					img.img( src="/img/main-logo.svg" )
				.footer__main-info Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
			.footer__contact
				.footer__email
					.footer__email-label email
					a.footer__email-link( href="mailto:testblogsupport@gmail.com" ) testblogsupport@gmail.com
				.footer__soc-links
					SocLinks
		.footer__newsletter-form
			NewsletterForm

</template>
<style lang="scss" src="./footer.scss" ></style>