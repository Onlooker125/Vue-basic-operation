<template>
  <div class="all">
    <h2>欢迎学习Props</h2>
    <h4>接收方式：{{ msg }}</h4>
    <p>传递参数参数：{{ age }}</p>
    <button ref="btn" @click="sendage">子传父Name</button>
  </div>
</template>

<script>
// 引入pubsub库
import pubsub from 'pubsub-js';
export default {
  data() {
    return {
      msg: "组件自定义事件(第一种方式)",
      age:19
    };
  },
  methods: {
    sendage() {
      // 消息发布
      pubsub.publish("getAge",this.age)
    },
  },
};
</script>

<style scoped>
.all{
    background-color: rgb(186, 44, 241)
}
</style>