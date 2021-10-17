import Vue from 'vue'
import App from './App.vue';

new Vue({
    render: h => h(App),
    // 第一步:安装全局事件总线,通过VM
    // 目的是在其他组件上可以用上 $on $off $emit
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')