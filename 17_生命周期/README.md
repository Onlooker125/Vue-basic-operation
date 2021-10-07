# 生命周期

### 定义：

1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。
2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
4. 生命周期函数中的this指向是vm 或 组件实例对象。

![生命周期.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e1f019a-d728-4b3c-8494-581a4b72abbf/生命周期.png)

(根据上图可以将整个生命周期分为三个部分：vm挂载、更新数据、销毁vm)

### 八个钩子函数（详情见上图）

1. `beforeCreate` 和 `created` 初始化（数据监测、数据代理）之前 和 初始化后
    
    > beforeCreate：在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
    > 
    
    > created：
    > 
    > - 在实例创建完成后被立即同步调用。
    > - 在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 $el property 目前尚不可用。
2. `beforeMount` 和 `mounted` 虚拟DOM 和 真实DOM
    
    > beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用。
    > 
    
    > mounted：实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    > 
3. `beforeUpdate` 和 `updated` 数据更新前 和 数据更新后
    
    > beforeUpdate：在数据发生改变后，DOM 被更新之前被调用。
    > 
    > - 这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。
    > - 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行。
    
    > updated：在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用
    > 
4. `beforeDestroy` 和 `destroyed` vm销毁之前 和 vm销毁
    
    > beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
    > 
    
    > destroyed：实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
    > 

### 两个较为常用的生命周期钩子：

1. `mounted`: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
2. `beforeDestroy`: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

### 关于销毁Vue实例

1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效，但原生DOM事件依然有效。
3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../JS/vue.js"></script>
</head>

<body>
    <div id="app">
        <h2 v-text="str"></h2>
        <h3>来个插值语法{{n}}</h3>
        <button @click="add">n++</button>
        <br>
        <button @click="destroy">销毁vm</button>
    </div>
    <script>
        const vm = new Vue({
            el: "#app",
            data() {
                return {
                    n: 1,
                    str:"测试钩子函数"
                }
            },
            methods: {
                add(){
                    this.n ++
                },
                destroy(){
                    // 启动销毁
                    this.$destroy()
                }
            },
            // beforeCreate() 此时可以通过vm访问到data中的数据 和 methods中配置的方法
            beforeCreate() {
                console.log("pass beforeCreate");
            },
            // created() 此时可以通过vm访问到data中的数据 和 methods中配置的方法
            created() {
                console.log("pass created");
            },
            // beforeMount() 此时
                // 页面呈现的是未经Vue编译的DOM结构
                // 所有对DOM的操作，最终都不奏效
            beforeMount() {
                console.log("pass beforeMount");
            },
            // mounted() 此时
                // 1.页面中呈现的是经过Vue编译的DOM
                // 2.对DOM的操作均有效(但尽可能避免)。至此初始化过程结束
                // 一般在此进行：开启定时器,发送网络请求,订阅信息,绑定自定义事件等初始化操作
            mounted() {
                console.log("pass mounted");
            },       
            // beforeUpdate() 此时数据是新的,但是页面上还是旧的.即页面尚未和数据保持同步
            beforeUpdate() {
                console.log("pass beforeUpdate");
            },
            // update() 此时数据是新的,页面上内容也是新的,即页面和数据已经保持同步
            updated() {
                console.log("pass update");
            },
            // beforeDestroy() 此时vm中所有的:data,methods,指令等等都处于可用状态,但马上就要执行销毁过程
            // 一般在此阶段:关闭定时器,取消订阅消息,解绑自定义事件等收尾操作
            beforeDestroy() {
                console.log("vm即将销毁");
            },
            destroyed() {
                console.log("vm已经销毁了,页面数据将保留但不在进行更新");
            },
        })
    </script>
</body>

</html>
```
