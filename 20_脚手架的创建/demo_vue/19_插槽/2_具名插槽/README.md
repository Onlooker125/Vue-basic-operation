### 具名插槽(就是具有名字的插槽)
+ 在`<slot></slot>`中添加一个属性name (挖一个有名字的坑)
    ``` <slot name="center"></slot> ```
+ 在Component组件标签中也添加一个属性`slot` (按照名字来对号入座哪个坑)
    ``` <category slot:'center'></category> ```

### 另
+ 如果要用到`<template>` 就不能用正常的写法，要用`v-slot`

### 具体编码
```vue
      父组件中：
              <Category>
                  <template slot="center">
                    <div>html结构1</div>
                  </template>
      
                  <template v-slot:footer>
                     <div>html结构2</div>
                  </template>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot name="center">插槽默认内容...</slot>
                     <slot name="footer">插槽默认内容...</slot>
                  </div>
              </template>
      ```
