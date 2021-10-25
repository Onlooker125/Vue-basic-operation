<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import Search from './components/search.vue';
import List from './components/list.vue';
export default {
  components: { Search,List },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>
