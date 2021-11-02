// 求和相关配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        test1: '我测试mapState',
        test2: '我也测试mapState',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },
        test3(state) {
            return state.test2 = '我测试mapGetters'
        }
    },
}