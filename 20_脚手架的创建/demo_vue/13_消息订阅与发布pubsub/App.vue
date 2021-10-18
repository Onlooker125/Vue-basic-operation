<template>
  <div>
    <h2>{{ str }}</h2>
    <Demo />
    <Demo-2></Demo-2>
    <demo-3></demo-3>
  </div>
</template>

<script>
// 引入pubsub库
import pubsub from 'pubsub-js';
import Demo from "./components/demo.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
export default {
  data() {
    return {
      str: "消息订阅与发布pubsub",
    };
  },
  methods: {
    // 消息订阅的回调函数
    getName(msgName,data) {
      console.log("订阅的自定义名字叫做" + msgName);
      console.log("父组件App收到子组件demo传来的数据：" + data);
    },
    getAge(msgName,data) {
      console.log("订阅的自定义名字叫做" + msgName);
      console.log("父组件App收到子组件demo2传来的数据：" + data);
    },
  },
  components: { Demo, Demo2, Demo3 },
  mounted() {
    // 通过回调进行消息订阅
    this.pid = pubsub.subscribe("getName",this.getName)
    this.pid2 = pubsub.subscribe("getAge",this.getAge)
    // 通过函数体function来进行消息订阅,但是注意因为this指向问题所以要用箭头函数
    this.pid3 = pubsub.subscribe("getPhone",(msgName,data)=>{
      console.log("订阅的自定义名字叫做" + msgName);
      console.log("父组件App收到子组件demo3传来的数据：" + data);
    })
  },
  // 即将销毁时候取消订阅
  beforeDestroy() {
    pubsub.unsubscribe(this.pid)
  },
};
</script>

<style>
</style>