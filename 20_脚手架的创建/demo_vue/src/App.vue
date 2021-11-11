<template>
  <div class="app">
    <Count></Count>
    <hr />
    <Persons></Persons>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Persons from "./components/persons.vue";
export default {
  name: "App",
  components: {
    Count,
    Persons,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css">
.app {
  margin: 10px 30px;
}
</style>
