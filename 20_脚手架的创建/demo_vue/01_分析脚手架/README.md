# 该文档为分析该脚手架的结构
## 脚手架中各个文件用意
 - `assets` 
 - `node_modules`
 - `public`
   - `favicon.ico` **网站页签图标**
   - `index.html` 
 - `src`
   - `assets` **放置网站的静态图**(存放logo,图片,视频等静态资源)
   - `components` **存放子组件的文件夹**
     - `HelloWorld.vue` **Vue的例子文件**
   - `App.vue` **所有组件的父组件**
   - `main.js` **项目的入口文件**
 - `.gitignore` **Git 的忽略文件**
 - `babel.config.js` **babel的控制文件**
 - `package.json` **npm 包的说明书**
 - `package-lock.json` **npm 包版本的控制文件**
 - `README.md` **对项目的说明markdown文件**
 
## 关于不同版本的Vue：
	
### 1.vue.js与vue.runtime.xxx.js的区别：
		(1).vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
		(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

### 2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
		render函数接收到的createElement函数去指定具体内容。


