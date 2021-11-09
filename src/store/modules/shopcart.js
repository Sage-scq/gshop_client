import { reqAddOrUpdateCart, reqCartList, reqUpdateCartChecked, reqDeleteOne } from "@/api";
const state = {
    shopCartList: [],
}

const mutations = {
    RECIEVE_SHOPCARTLIST(state, shopCartList) {
        if (shopCartList) {
            state.shopCartList = shopCartList
        }
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
            if (result.data[0]) {
                commit('RECIEVE_SHOPCARTLIST', result.data[0]['cartInfoList'])
            } else {
                commit('RECIEVE_SHOPCARTLIST', [])

            }
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
    },
    // 修改购物车全选
    async updateCartCheckedAll({ dispatch, state }, isCheckedAll) {
        let promises = []
        state.shopCartList.forEach(item => {
            if (item.isChecked === isCheckedAll) return
            let promise = dispatch('updateCartChecked', { skuId: item.skuId, isChecked: isCheckedAll })
            promises.push(promise)
            return Promise.all(promises)
        });
    },
    async deleteCart(context, skuId) {
        const result = await reqDeleteOne(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async deleteCartAll({ dispatch, state }) {
        let promises = [];
        state.shopCartList.forEach(item => {
            if (!item.isChecked) return
            let promise = dispatch('deleteCart', item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}

export default {
    state,
    actions,
    mutations
}