<template>
  <div>
      <h1>{{str}}</h1>
      <School></School>
  </div>
</template>

<script>
// 引入 School 组件
import School from './components/School'
export default {
    data() {
        return {
            str:"我是App组件，管理者其他组件。是Vm的亲信"
        }
    },
    // 注册组件
    components:{
        School
    }
}
</script>

<style>

</style>