// vuex最核心的管理对象store
import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home'
import user from './modules/user'
import search from './modules/search'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home,
        user,
        search
    }
});