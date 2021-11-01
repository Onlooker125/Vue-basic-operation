// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex';
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions对象 -- 响应组件中用户的动作
const actions = {
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    }
}
// 准备mutations对象 -- 修改state中的数据
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}
// 准备state对象 -- 保存具体的数据
const state = {
    sum: 0,
    test1:'我测试mapState',
    test2:'我也测试mapState'
}
// 准备getters对象 -- 相当于vue中的Computed计算属性，创建完之后记得导出(暴露)
const getters = {
    // 有个形参 是state
    bigSum(state) {
        return state.sum * 10
    },
    test3(state){
        return state.test2 = '我测试mapGetters'
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions, mutations, state, getters
})