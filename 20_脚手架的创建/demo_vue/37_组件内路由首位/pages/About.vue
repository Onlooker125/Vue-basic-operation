<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      if (localStorage.getItem("permission") === "123") {
        next();
      } else {
        alert("You don't have permission");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    next();
  },
};
</script>