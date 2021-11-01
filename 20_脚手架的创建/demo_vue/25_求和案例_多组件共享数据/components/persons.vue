<template>
  <div>
    <h1>我是Persons组件</h1>
    <h4 style="color:red">我是Const组件中的和：{{sum}}</h4>
    <input type="text" v-model="name" placeholder="请输入名字" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid/non-secure";
import { mapState } from 'vuex';
export default {
  name: "persons",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    ...mapState(["sum"])
  },
  methods: {
    addPerson() {
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('PERSONLIST',personObj)
      this.name = ""
    },
  },
};
</script>

<style>
</style>