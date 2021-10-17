<template>
  <div class="all">
    <h2>欢迎学习Props</h2>
    <h4>接收方式：{{ msg }}</h4>
    <p>传递参数参数：{{ age }}</p>
    <button ref="btn" @click="sendage">子传父Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "组件自定义事件(第一种方式)",
      age:19
    };
  },
  methods: {
    sendage() {
      this.$bus.$emit('getAge',this.age)
    },
  },
};
</script>

<style scoped>
.all{
    background-color: rgb(186, 44, 241)
}
</style>