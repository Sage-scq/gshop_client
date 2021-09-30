// 管理搜索页面数据的vuex子模块
import { reqSearch } from '@/api'
const state = {
    productList: {},
}
const mutations = {
    RECIEVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    }
}
const actions = {
    async getProductsList({ commit }, searchParams) {
        // 不想删除组件中options中的数据所以使用浅拷贝,只拷贝属性不拷贝值
        searchParams = { ...searchParams }
        // 删除空串或空数组
        // 遍历对象
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '' || Array.isArray(searchParams[key]) && searchParams[key].length === 0) {
                delete searchParams[key]
            }
        })
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
    total(state) {
        return state.productList.total || 0
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}