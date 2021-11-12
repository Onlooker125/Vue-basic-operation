// 该文件是整个项目的入口文件！

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vue的实例对象 --- vm
new Vue({
  // 将 App 组件放入到容器中
  render: h => h(App),  
}).$mount('#app') 
