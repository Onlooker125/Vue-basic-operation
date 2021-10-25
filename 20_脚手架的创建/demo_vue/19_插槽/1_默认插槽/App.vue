<template>
  <div class="container">
    <Category title="美食">
      <!-- 默认插槽，直接再标签中插入，通过<slot></slot>来填入 -->
      <img src="./assets/R.jpg" />
      <ul>
        <li v-for="(f, index) in foods" :key="index">
          {{ f }}
        </li>
      </ul>
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">
          {{ g }}
        </li>
      </ul>
    </Category>
    <Category title="视频">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <ul>
        <li v-for="(f, index) in films" :key="index">
          {{ f }}
        </li>
      </ul>
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
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
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
  margin-bottom: 10px;
}
video {
  width: 100%;
  margin-bottom: 10px;
}
</style>
