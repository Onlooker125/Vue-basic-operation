import axios from 'axios';
// 人员相关配置
export default {
    namespaced: true,
    actions: {
        addToday(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit("TODAY",response.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        PERSONLIST(state, value) {
            state.personList.unshift(value)
        },
        TODAY(state,value){
            state.today = value
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ],
        today:""
    },
    getters: {}
}
