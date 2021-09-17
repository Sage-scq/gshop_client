// 管理首页数据的vuex子模块
import { reqCategoryList } from '@/api'
const state = {
    categoryList: []
}
const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0, 15);
    }
}
const actions = {
    // 获取三级列表的异步action
    async getCategoryList({ commit }) {
        // 调用接口请求函数发异步ajax请求
        // 请求成功了就取出数据给mutations保存
        const result = await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data;
            commit('RECEIVE_CATEGORY_LIST', categoryList)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}