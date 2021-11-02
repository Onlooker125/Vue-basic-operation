<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍后为：{{ bigSum }}</h3>
    <br>
    <h4>Demo: {{test1}} --- {{test2}}</h4>
    <h4>Demo: {{test3}}</h4>
    <br>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("INCREMENT", this.n);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    },
  },
  computed: {
    // 靠程序员自己去写计算属性
    sum(){
      return this.$store.state.sum
    },
    // 靠mapState生成计算属性，从state中读取数据(第一种：对象写法)
    // ES6写法，将...后面的对象展开，对象写法必须写成键值对形式不能简写,键是函数名,值是state中的值
    // ...mapState({sum:'sum',test1:'test1',test2:'test2'})

    // 靠mapState生成计算属性，从state中读取数据(第二种：数组写法)
    // 数组写法一个值两个用:属性名和读取出来的名是一致的才能用数组写法
    ...mapState(["test1","test2"]),
// *********************************************************************************************************
    // 靠mapGetters生成计算属性，从state中读取数据(第一种：对象写法)
    // ...mapGetters({ bigSum: "bigSum" }),
    
    // 靠mapGetters生成计算属性，从state中读取数据(第二种：数组写法)
    ...mapGetters(["bigSum","test3"]),
  },
  mounted() {
    console.log("我是$store", this.$store);
    const x = mapState({ sum: "sum" });
    console.log("我是mapState", x);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
