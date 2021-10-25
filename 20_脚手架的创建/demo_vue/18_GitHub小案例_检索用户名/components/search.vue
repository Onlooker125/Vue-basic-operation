<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />
        &nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      //   请求之前发送数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      //   请求到数据之后
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 数据请求成功
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        // 数据请求失败
        (error) => {
          this.$bus.$emit("updateListData", {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
      //   console.log(this.keyWord);
    },
  },
  mounted() {},
};
</script>

<style>
</style>