<template>
  <div class="all">
    <h2>欢迎学习Props</h2>
    <h4>接收方式：{{ msg }}</h4>
    <p>传递参数参数：{{ myName }}</p>
    <button ref="btn" @click="sendName">子传父Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Props",
      myName:"Tang"
    };
  },
  methods: {
    sendName() {
      // 第三步:通过$bus身上的$emit方法将数据传到另外的组件上
      this.$bus.$emit('getName',this.myName)
    },
  },
};
</script>

<style>
.all{
    background-color: palegreen;
}
</style>