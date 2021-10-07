<template>
  <div>
    <h2>{{ str }}</h2>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./Student.vue";
export default {
  data() {
    return {
      str: "我是School组件",
    };
  },
  components: {
    Student,
  },
};
</script>

<style>
</style>