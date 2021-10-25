//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	// 创建全局事件总线
	beforeCreate() {
		Vue.prototype.$bus=this
	},
	render: h => h(App)
})