<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 具名插槽：定义插槽时再定义一个属性 name -->
    <slot name="center">Loading...</slot>
    <slot name="footer">Loading...</slot>
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