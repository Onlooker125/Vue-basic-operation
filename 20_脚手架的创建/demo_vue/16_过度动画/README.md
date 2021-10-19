## Vue封装的过度与动画

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 写法：

   1. 准备好样式：
      - 元素进入的样式：
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
      - 元素离开的样式：
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点

   2. 使用```<transition>```包裹要过度的元素，并配置name属性：

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">你好啊！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。

## 轻松使用：
+ 通过 `<transition></transition>` 将需要动画过渡的页面元素**包裹**
+ 再将以下样式放入 `<style></style>` 中
  ```
        /* 过度动画 */
        .v-enter-active{
		    animation: TodoItem 0.5s linear;
	    }

	    .v-leave-active{
		    animation: TodoItem 0.5s linear reverse;
	    }

	    @keyframes TodoItem {
		    from{
	    		transform: translateX(100%);
	    	}
		    to{
		    	transform: translateX(0px);
		    }
	    }
  ```

## 更新日志

#### 通过学习**Vue过度动画**:
> + 将原先App祖先组件传给Item孙子组件之间使用的Props更新成为全局事件总线实现
> + 使之Item孙子组件直接跟App祖先组件通信不用借助于中间的List组件
