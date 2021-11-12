<template>
  <div>
    <h4 :style="{ opacity }">欢迎学习Vue</h4>
    请输入账号：<input type="text" />
    <br />
    请输入密码：<input type="text" />
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      opacity: 1,
    };
  },
  activated() {
    console.log("new路由组件被激活");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= -1) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log("news路由组件即将被销毁");
    clearInterval(this.timer)
    this.opacity = 1
  },
};
</script>

<style>
</style>