<template>
  <div>
    <h2>{{ str }}</h2>
    <!-- <demo name="唐" sex="还是男" :age="20" phone="234234" msg="简单申明接收"></demo> -->
    <!-- <demo name="唐" sex="还是男" :age="20" :phone="234234" msg="接收的同时对数据进行类型限制"></demo> -->
    <demo name="唐" sex="还是男" :age="20" :phone="234234" msg="接收的同时对数据：进行类型限制+默认值的指定+必要性的限制"></demo>
    
  </div>
</template>

<script>
import Demo from './components/demo.vue';
export default {
  data() {
    return {
      str: "props测试",
    };
  },
  methods: {
  },
  components:{ Demo }
};
</script>

<style>
</style>