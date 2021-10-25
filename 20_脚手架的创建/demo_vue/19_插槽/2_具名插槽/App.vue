<template>
  <div class="container">
    <Category title="美食">
      <!-- 具名插槽：就是具有名字的插槽，通过slot属性和slot标签中的name属性链接 -->
      <img src="./assets/R.jpg" slot="center" />
      <div class="link" slot="footer">
        <a href="http://www.baidu.com">百度一下</a>
        <a href="http://www.baidu.com">百度两下</a>
      </div>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">
          {{ g }}
        </li>
      </ul>
      <!-- 如果需要用到 <template></template> 模板标签只能用 v-slot:""  -->
      <template v-slot:footer>
        <div class="link">
          <a href="http://www.baidu.com">单击</a>
          <a href="http://www.baidu.com">网游</a>
        </div>
        <h4>欢迎访问</h4>
      </template>
    </Category>
    <Category title="视频">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="center"
      ></video>
      <div class="link" slot="footer">
        <a href="http://www.baidu.com">baidu</a>
        <a href="http://www.baidu.com">baidu</a>
      </div>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
/* 因为是img和video加载到Category中，所以img和video的样式也可以交给Category组件中去 */
img {
  width: 100%;
}
video {
  width: 100%;
}
.link {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
h4{
  text-align: center;
  font-weight: bold;
}
</style>
