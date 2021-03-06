import { reqTradeInfo } from "@/api"

const state = {
    tradeInfo: {}
}
const mutations = {
    RECIEVE_TRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async tradeInfo({ commit }) {
        const result = await reqTradeInfo()
        if (result.code === 200) {
            commit('RECIEVE_TRADEINFO', result.data)
        }
    }
}
const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state) {
        return state.tradeInfo.userAddressList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}