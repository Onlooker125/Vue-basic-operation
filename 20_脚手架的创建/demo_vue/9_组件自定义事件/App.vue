<template>
  <div>
    <h2>{{ str }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <Demo :getName="getName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <Demo-2 @Tang="getAge"></Demo-2>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <demo-3 ref="getPhone"></demo-3>
  </div>
</template>

<script>
import Demo from "./components/demo.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
export default {
  data() {
    return {
      str: "组件自定义事件",
    };
  },
  methods: {
    getName(name) {
      console.log("父组件App收到子组件demo传来的数据：" + name);
    },
    getAge(age) {
      console.log("通过组件自定义事件收到demo2传来的数据：" + age);
    },
    getPhone(phone){
      console.log("通过组件自定义事件收到demo3传来的数据：" + phone);
    }
  },
  components: { Demo, Demo2, Demo3 },
  mounted(){
    this.$refs.getPhone.$on('Tang',this.getPhone)
  }
};
</script>

<style>
</style>