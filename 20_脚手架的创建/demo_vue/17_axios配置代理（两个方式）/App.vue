<template>
  <div id="root">
    <h1>获取学生信息</h1>
    <h3>页面加载自动获取学生信息</h3>

    <h1>获取汽车信息</h1>
    <h3>页面加载自动获取汽车信息</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getStudent() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCar() {
      axios.get("http://localhost:8080/Tang/cars").then(   // 如果设置请求头在这里添加头信息
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
  mounted() {
    this.getStudent();
	this.getCar()
  },
};
</script>

<style>
</style>
