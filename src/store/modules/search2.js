// 管理搜索页面数据的vuex子模块
import { reqSearch } from '@/api'
const state = {
    productList: {}
}
const mutations = {
    RECIEVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    }
}
const actions = {
    async getProductsList({ commit }, searchParams) {
        const result = await reqSearch(searchParams);
        if (result.code === 200) {
            const productList = result.data;
            commit('RECIEVE_PRODUCT_LIST', productList)
        }
    },
}
const getters = {
    // 使用计算属性直接返回数组
    goodsList(state) {
        return state.productList.goodsList || []
    },
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    attrsList(state) {
        return state.productList.attrsList || []
    },

}
export default {
    state,
    mutations,
    actions,
    getters
}