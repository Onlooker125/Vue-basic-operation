// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex';
// 应用Vuex插件
Vue.use(Vuex)
// 引用count求和相关配置
import countOptions from '../store/count';
// 引用person人员相关配置
import personOptions from '../store/person';
// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})