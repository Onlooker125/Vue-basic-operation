<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽：在定义插槽这里进行数据传递，传递的数据只会给要用到这些数据的插槽使用 -->
    <slot :games="games">Loading...</slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
        // 数据再定义插槽这一块，要在另一个组件中使用这些数据
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>