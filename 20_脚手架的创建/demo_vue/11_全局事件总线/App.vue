<template>
  <div>
    <h2>{{ str }}</h2>
    <Demo />
    <Demo-2></Demo-2>
    <demo-3></demo-3>
  </div>
</template>

<script>
import Demo from "./components/demo.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
export default {
  data() {
    return {
      str: "全局事件总线",
    };
  },
  methods: {
    // 组件自定义事件的回调
    getName(name) {
      console.log("父组件App收到子组件demo传来的数据：" + name);
    },
    getAge(age) {
      console.log("父组件App收到子组件demo传来的数据：" + age);
    },
  },
  components: { Demo, Demo2, Demo3 },
  // 第二步:在接收方 添加组件自定义事件,通过钩子函数
  mounted() {
    this.$bus.$on("getName", this.getName);
    this.$bus.$on("getAge", this.getAge);
    // 回调直接在创建组件自定义事件上写的方式
    this.$bus.$on("getPhone", (phone) => {
      console.log("父组件App收到子组件demo传来的数据：" + phone);
    });
  },
};
</script>

<style>
</style>