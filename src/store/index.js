import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        storeMsg: 'from store',
        gender: [
            { sex: 0, name: '张三' },
            { sex: 1, name: '小花' },
            { sex: 1, name: '小丽' },
            { sex: 0, name: '李四' }
        ]
    },
    getters: {
        filterGender: (state) => (sex) => {
            return state.gender.filter(gender => gender.sex == sex)
        }
    },
    mutations: {
        addCount(state, obj) {
            state.count += obj.num
        }
    }
});
export default store