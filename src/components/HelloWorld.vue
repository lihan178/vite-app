<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { AesDecrypt } from '@/base/utils';

defineProps({
	msg: String,
});

onMounted(() => {
	const a = 11;
	const b = 11;
	console.log(b == a);
	console.log(
		"🚀 ~ file: HelloWorld.vue ~ line 11 ~ onMounted ~ AesDecrypt('KVUQjYhldIG4Md4ybQLM1b86eBpefUEKWJwWcQUNsvY=')",
		AesDecrypt('KVUQjYhldIG4Md4ybQLM1b86eBpefUEKWJwWcQUNsvY=')
	);
});

const count = ref(0);
</script>

<template>
	<h1>1asd2{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
		starter
	</p>
	<p>
		Install
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	position: relative;
	color: #888;
	flex: 1;
}
</style>
