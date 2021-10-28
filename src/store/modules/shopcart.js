import { reqAddOrUpdateCart } from "@/api";
const state = {
}
// 管理detail页面的vuex模块

const actions = {
    // 获取detail的异步action
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
}

export default {
    state,
    actions,
}