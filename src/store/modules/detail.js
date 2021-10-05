import { reqDetail } from "@/api";

// 管理detail页面的vuex模块
const state = {
    detailInfo: {}
}
const mutations = {
    RECEIVE_DETAIL_INFO(state, detailInfo) {
        state.detailInfo = detailInfo
    },
}
const actions = {
    // 获取detail的异步action
    async getDetailInfo({ commit }, skuId) {
        const result = await reqDetail(skuId);
        if (result.code === 200) {
            const detailInfo = result.data;
            commit('RECEIVE_DETAIL_INFO', detailInfo)
        }
    },
}
const getters = {
    categoryView(state) {
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}