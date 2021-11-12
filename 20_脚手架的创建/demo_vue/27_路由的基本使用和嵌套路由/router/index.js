// 此文件为路由的配置文件

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'News',
                    component:News
                },
                {
                    path:'Message',
                    component:Message
                }
            ]
        }
    ]
})
// 暴露(导出)router
export default router