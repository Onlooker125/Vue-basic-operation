<template>
  <div>
    <h5>id:{{ id }}</h5>
    <h5>title:{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: "detail",
  props:['id','title']
};
</script>

<style>
</style>