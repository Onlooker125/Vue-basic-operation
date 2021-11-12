<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的ES6字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'detail',
            params: { id: m.id, title: m.title },
          }"
          >{{ m.title }}</router-link
        >
        <!-- 路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！ -->
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
};
</script>

<style>
</style>