### 默认插槽
+ 直接在Component组件标签里写入需要的HTML元素
+ 在Component组件中通过`<slot></slot>` 来定义一个插槽(通俗来讲就是 挖个坑，等着组件的使用者来进行填充)

### 具体编码
```vue
      父组件中：
              <Category>
                 <div>html结构1</div>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot>插槽默认内容...</slot>
                  </div>
              </template>
```