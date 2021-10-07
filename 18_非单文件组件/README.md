 # 非单文件组件笔记
官方文档 https://cn.vuejs.org/v2/guide/components.html

### Vue中使用组件的三大步骤：

1. 定义组件 (创建组件) `Vue.extend({ })`
2. 注册组件 (全局注册 和 局部注册) `component` 和 `components` 全局不加s
3. 使用组件 (写组件标签)

### 一、如何定义一个组件？

> 使用 `Vue.extend(options)` 创建，其中 options 和 new Vue(options) 时传入的那个 options 几乎一样，但也有点区别：
> 
> - el不要写，为什么？
>     
>     ———— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
>     
> - data必须写成函数，为什么？
>     
>     ———— 避免组件被复用时，数据存在引用关系。
>     

> **备注**：使用template可以配置组件结构。
> 

### 二、如何注册组件？

1. 局部注册：靠new Vue的时候传入`components`选项
2. 全局注册：靠`Vue.component`( ' 组件名 ' , 组件 )

### 三、编写（使用）组件标签：

 `<school></school>`

### 关于Component

> 借鉴于官方文档 [https://cn.vuejs.org/v2/guide/components.html](https://cn.vuejs.org/v2/guide/components.html)?
> 
> 1. school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是Vue.extend 生成的。
> 2. 我们只需要写 <school/> 或 <school></school> ，Vue 解析时会帮我们创建 school 组件的实例对象，
>     
>     即Vue帮我们执行的：`new VueComponent(options)`。
>     
> 3. 特别注意：每次调用Vue.extend，返回的都是一个全新的 VueComponent ！！！！
> 4. 关于this指向：
>     
>     (1). 组件配置中：
>     
>     data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
>     
>     (2). new Vue(options)配置中：
>     
>     data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。
>     
> 5. VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
> 6. 一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype 
>     
>     也就是 VueComponent 创建出的实例对象的原型会指向Vue的原型上，最后才是 Object 。目的就是让 VueComponent 实例对象也可以访问到Vue原型上的属性和方法)
>)
