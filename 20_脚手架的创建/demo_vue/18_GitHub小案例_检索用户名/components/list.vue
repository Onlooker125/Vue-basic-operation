<template>
  <div>
    <!-- 展示用户信息 -->
    <div v-show="info.users.length" class="row">
      <div class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="info.isFirst">欢迎使用！</h2>
    <!-- 展示加载中 -->
    <h4 v-show="info.isLoading">Loading...</h4>
    <!-- 展示错误信息 -->
    <h4 v-show="info.errMsg">{{ info.errMsg }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        isFirst: true,        //是否第一次打开，第一次打开显示欢迎
        isLoading: false,     //加载状态
        errMsg: "",           //错误信息
        users: [],            //接口上返回的用户数据
      },
    };
  },
  mounted() {
    // 通过全局事件总线传递数据
    this.$bus.$on("updateListData", (userObj) => {
        this.info = {...this.info,...userObj}
      // console.log("我拿到search的数据了", this.users);
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>