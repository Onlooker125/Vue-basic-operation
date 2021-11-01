<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍后为：{{ bigSum }}</h3>
    <br />
    <h4>Demo: {{ test1 }} --- {{ test2 }}</h4>
    <h4>Demo: {{ test3 }}</h4>
    <h4 style="color:red">我是persons组件学生的个数：{{personList.length}}</h4>
    <br />
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // 引用到命名空间namespaced
    ...mapMutations('countAbout',{ increment: "INCREMENT", decrement: "DECREMENT"}),
    ...mapActions('countAbout',['incrementOdd','incrementWait'])
  },
  computed: {
    ...mapState('countAbout',["sum", "test1", "test2" ]),
    ...mapState('personAbout',["personList"]),
    ...mapGetters('countAbout',["bigSum", "test3"]),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
