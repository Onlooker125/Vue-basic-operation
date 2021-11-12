<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: 'detail',
            query:{id:m.id,title:m.title}
          }"
          >{{ m.title }}</router-link
        >
        <button @click="push(m)">push</button>
        <button @click="replace(m)">replace</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    push(m){
      this.$router.push({
        name:'detail',
        query:{id:m.id,title:m.title}
      })
    },
    replace(m){
      this.$router.replace({
        name:'detail',
        query:{id:m.id,title:m.title},
      })
    }
  },
};
</script>

<style>
</style>