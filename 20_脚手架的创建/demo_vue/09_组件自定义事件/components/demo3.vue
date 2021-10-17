<template>
  <div class="all">
    <h2>欢迎学习Props</h2>
    <h4>接收方式：{{ msg }}</h4>
    <p>传递参数参数：{{ phone }}</p>
    <button ref="btn" @click="sendPhone">子传父Name</button>
    <button @click="unbind">解绑组件自定义事件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "组件自定义事件(第二种方式：通过ref灵活性更高)",
      phone:1943453
    };
  },
  props: ["getFirst"],
  methods: {
    sendPhone() {
      this.$emit('Tang',this.phone)
    },
    unbind(){
      // 解绑一个自定义组件事件
      this.$off('Tang')
      // 解绑多个自定义组件事件
      this.$off(['Tang'])
      // 解绑全部的自定义组件事件
      this.$off()
    }
  },
};
</script>

<style scoped>
.all{
    background-color: rgb(44, 169, 241)
}
</style>