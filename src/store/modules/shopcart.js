import { reqAddOrUpdateCart, reqCartList } from "@/api";
const state = {
    shopCartList: []
}

const mutations = {
    RECIEVE_SHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}
const actions = {
    // 获取购物车的异步action
    async addOrUpdateCart(context, { skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum);
        // if (result.code === 200) {
        //     return 'ok'
        // } else {
        //     return 'failed'
        // }
        // 上面返回的promise只有成功
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取购物车列表
    async getCartList({ commit }) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('RECIEVE_SHOPCARTLIST', result.data)
        }
    }
}

export default {
    state,
    actions,
    mutations
}