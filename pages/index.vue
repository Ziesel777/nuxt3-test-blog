<template lang="pug">

template( v-for="item in body" :key="item.id" )
	ArticleList( v-if="item?.type=='article_list_block'", :list="item.data.articles" )

</template>
<script setup>

let { data } = await useAsyncData('data', async () => $fetch('https://devtwit8.ru/api/v1/page/?path=/'));
let { body, meta, page_type } = data.value;
let { title, description, slug } = meta;

useSeoMeta({ title, description });
</script>