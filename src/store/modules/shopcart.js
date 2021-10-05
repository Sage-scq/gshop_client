import { reqAddOrUpdateCart } from "@/api";

// 管理detail页面的vuex模块
const state = {
    cartInfo: {}
}
const mutations = {
    RECEIVE_CART_INFO(state, cartInfo) {
        state.cartInfo = cartInfo
    },
}
const actions = {
    // 获取detail的异步action
    async getCartInfo({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum);
        if (result.code === 200) {
            const cartInfo = result.data;
            commit('RECEIVE_CART_INFO', cartInfo)
        }
    },
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}