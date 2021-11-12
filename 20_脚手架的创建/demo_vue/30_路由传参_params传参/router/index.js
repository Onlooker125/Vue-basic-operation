// 此文件为路由的配置文件

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

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
                    name:'news',
                    path:'News',
                    component:News
                },
                {
                    name:'message',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})
// 暴露(导出)router
export default router