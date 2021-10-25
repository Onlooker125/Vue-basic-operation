<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充）,可以写入一些默认值 -->
    <slot>Loading...</slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
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