## 作用域插槽
> 你的数据在定义插槽的component组件中，而你在另外一个component组件中需要用到这些数据。通过插槽提供的一个方法可以完成

+ 在`<slot></slot>` 中通过 `:game="games"`
  + 第一个`:game` 可以自定义
  + 第二个`games` 是需要传递的对象或者数组
+ 别的组件接收时必须用`<template></template>` 来包裹，中间带着一个`slot-scope` 属性，值可以自定义
+ 传过来的是一个对象，**对象的键是上面定义的game**，值才是需要的内容
### 另
+ template 中 `scope` 属性是旧写法，新写法是 `slot-scope`

###具体编码：

``` vue
#### 父组件中：
  <Category>
    <template scope="scopeData">
      <!-- 生成的是ul列表 -->
      <ul>
        <li v-for="g in scopeData.games" :key="g">{{g}}</li>
      </ul>
    </template>
  </Category>

  <Category>
    <template slot-scope="scopeData">
      <!-- 生成的是h4标题 -->
      <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
    </template>
  </Category>

  #### 子组件中：
  <template>
      <div>
          <slot :games="games"></slot>
      </div>
  </template>

  <script>
      export default {
          name:'Category',
          props:['title'],
          //数据在子组件自身
          data() {
              return {
                  games:['红色警戒','穿越火线','劲舞团','超级玛丽']
              }
          },
      }
  </script>
  ```