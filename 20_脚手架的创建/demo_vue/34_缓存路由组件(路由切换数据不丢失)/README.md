### 10.缓存路由组件

1. 作用：路由组件离开时会执行销毁，同时页面输入框等内容也会随之销毁。缓存路由组件就是让不展示的路由组件保持挂载，不被销毁。即跳转页面内容也不消失

2. 具体编码：

   ```vue
   <!-- 缓存一个 -->
   <keep-alive include="News"> 
       <router-view></router-view>
   </keep-alive>
   
   <!-- 缓存多个,用数组 -->
   <keep-alive :include="['one','two']">
      <router-view></router-view>
   </keep-alive>
   ```
3.`include` 属性用于指定包含哪个组件。只有被包含的组件才会被缓存,他的值是**组件名name**