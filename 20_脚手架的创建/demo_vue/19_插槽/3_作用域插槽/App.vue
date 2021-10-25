<template>
  <div class="container">
    <Category title="游戏">
      <!-- 插槽接收数据的时候必须用 <template></template> 包裹，在加上slot-scope来接收 -->
      <template scope="Tang">  <!--scope 旧写法-->
        <!-- {{Tang}} -->
        <!-- 他传过来的是一个对象，要用的时候 Tang.games / Tang是scope中定义的，games是定义插槽那边定义的 -->
        <ul>
          <li v-for="(g, index) in Tang.games" :key="index">
            {{ g }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="Tang"> <!--slot-scope 新写法-->
        <ol>
          <li v-for="(g, index) in Tang.games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="Tang">
        <h4 v-for="(g, index) in Tang.games" :key="index">
          {{ g }}
        </h4>
      </template>
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
    return {};
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
h4 {
  text-align: center;
  font-weight: bold;
}
</style>
