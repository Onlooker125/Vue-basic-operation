<template>
  <div>
      <h2>欢迎学习Props</h2>
      <h4>接收方式：{{msg}}</h4>
      <p>第一个参数：{{myName}}</p>
      <p>第二个参数：{{age}}</p>
      <p>第三个参数：{{sex}}</p>
      <p>第四个参数：{{phone}}</p>
      <button ref="btn" @click="output">点击输出</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        myName:this.name
        // age:'16',
        // sex:'男',
        // phone:123123        
    }
},
methods:{
    output(){
        this.myName="huang"
    }
},
// 第一种方法：简单声明接收
// props:['name','age','sex','phone','msg']
// 接收的同时对数据进行类型限制
// props:{
//     name:String,
//     age:Number,
//     sex:String,
//     phone:Number,
//     msg:String
// }
// 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
props:{
    name:{
        typeof:String,  //name的类型是字符串
        require:true   //name是必要的   
    },
    age:{
        typeof:Number,
        default:99
    },
    sex:{
        require:true
    },
    phone:{
        typeof:Number
    },
    msg:{
        typeof:String
    }
}
}
</script>

<style>

</style>