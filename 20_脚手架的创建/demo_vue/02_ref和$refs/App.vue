<template>
  <div>
    <h2>{{ str }}</h2>
    <div ref="div">第一个div</div>
    <span ref="span">这是一个span</span>
    <br>
    <button ref="btn" @click="output">点击输出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "ref测试",
    };
  },
  methods: {
    output() {
      // 输出全部
      console.log(this.$refs);
      // 输出div的
      console.log(this.$refs.div);
      // 输出span的
      console.log(this.$refs.span);
      // 输出btn的
      console.log(this.$refs.btn);
    },
  },
};
</script>

<style>
</style>