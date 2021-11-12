### 8.```<router-link>```的replace属性(历史记录模式)

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录(往栈顶添加历史记录)，```replace```是替换当前记录(栈顶历史记录)。
3. 路由跳转时候默认为```push```
4. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```