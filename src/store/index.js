import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        address:'',
    },
    mutations: {
		update(state,[key,value]){
			state[key]=value;
		},
    }
})
 
export default store