<template>
  <div class="all">
    <h2>欢迎学习Props</h2>
    <h4>接收方式：{{ msg }}</h4>
    <p>传递参数参数：{{ myName }}</p>
    <button ref="btn" @click="sendName">子传父Name</button>
  </div>
</template>

<script>
// 引入pubsub库
import pubsub from 'pubsub-js';
export default {
  data() {
    return {
      msg: "Props",
      myName:"Tang"
    };
  },
  methods: {
    sendName() {
      // 消息发布
      pubsub.publish('getName',this.myName)
    },
  },
};
</script>

<style>
.all{
    background-color: palegreen;
}
</style>