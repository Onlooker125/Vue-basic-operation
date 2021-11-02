<template>
  <div>
    <h1>我是Persons组件</h1>
    <h4 style="color:red">我是Const组件中的和：{{sum}}</h4>
    <input type="text" v-model="name" placeholder="请输入名字" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <button @click="todayServer">每日鸡汤</button>
    <h4>{{today}}</h4>
  </div>
</template>

<script>
import { nanoid } from "nanoid/non-secure";
import {mapState} from 'vuex';
export default {
  name: "persons",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    ...mapState('personAbout',["today"]),
  },
  methods: {
    addPerson() {
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/PERSONLIST',personObj)
      this.name = ""
    },
    todayServer(){
      this.$store.dispatch('personAbout/addToday')
    }
  },
  mounted() {
    // console.log(this.$store);
  },
};
</script>

<style>
</style>