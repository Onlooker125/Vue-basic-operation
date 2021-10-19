<template>
	<div id="root">
		<button @click="getStudent">获取学生信息</button>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:'App',
		data() {
			return {

			}
		},
		methods: {
			getStudent(){
				axios.get('http://localhost:8080/students').then(
					response => {
						console.log("请求成功了" ,response.data);
					},
					error => {
						console.log("请求失败了" , error.message);
					}
				)
			}
		},
	}
</script>

<style>
	
</style>
