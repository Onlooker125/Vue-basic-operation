# 单文件组件笔记
单文件组件就是 .vue 文件。通过脚手架去管理各个组件

### 重要的几个文件作用：

> App.vue : 管理着其他所有的子组件。
> 
> 
> ```jsx
> <template>
>   <div>
>       <School></School>
>   </div>
> </template>
> 
> <script>
> // 引入 School 组件
> import School from './School.vue'
> export default {
>     // 注册组件
>     components:{
>         School
>     }
> }
> </script>
> ```
> 

> main.js : 通过 .js 文件来创建 vue 实例，并指名为哪个容器服务
> 
> 
> ```jsx
> // 引入 App 组件中心，所有其他组件都由 App 管理
> import App from './App.vue'
> new Vue({
>     el:"#root",
>     template:`<App></App>`,
>     components:{App}    
> })
> ```
> 

> index.html : 放置容器
> 
> 
> ```jsx
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
> </head>
> <body>
>     <div id="root"></div>
>     <script src="../JS/vue.js"></script>
>     <!-- 这个 main.js 可以叫他入口文件 -->
>     <script src="./main.js"></script>
> </body>
> </html>
> ```
>
