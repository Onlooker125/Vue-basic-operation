// 引入 App 组件中心，所有其他组件都由 App 管理
import App from './App.vue'

new Vue({
    el:"#root",
    template:`
        <App></App>
    `,
    components:{
        App
    }    
})