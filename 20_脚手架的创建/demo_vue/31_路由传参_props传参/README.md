### 7.路由的props配置

​	作用：让 **路由组件** 更方便的收到参数
​	用法：在路由配置中添加props配置项，选择传参的方式

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900,b:'hello'}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件,需搭配params传参
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props($route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
   //第三种写法的解构赋值写法
   props({query:{id,title}}){
      return {id,title}
   }
}
```
接收参数
```
<!-- 通过props配置项 -->
props:['id','title']

<!-- 之后直接用模板语法{{id}}使用 -->
```
