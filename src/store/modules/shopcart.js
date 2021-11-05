import { reqAddOrUpdateCart, reqCartList, reqUpdateCartChecked } from "@/api";
const state = {
    shopCartList: []
}

const mutations = {
    RECIEVE_SHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList[0]
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
    },
    // 修改购物车选中状态
    async updateCartChecked(context, { skuId, isChecked }) {
        const result = await reqUpdateCartChecked(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}

export default {
    state,
    actions,
    mutations
}