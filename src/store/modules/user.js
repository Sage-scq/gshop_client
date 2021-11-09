// 管理用户数据的子模块
import { reqCode, reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from '@/api'
import { getUserTempId, getToken, setToken, removeToken, } from '@/utils/userabout'
const state = {
    userTempId: getUserTempId(),
    token: getToken(),
    code: '请输入正确的手机号',
    userInfo: {}
}
const mutations = {
    RECIEVE_TOKEN(state, token) {
        state.token = token
    },
    RECIEVE_CODE(state, code) {
        state.code = code
    },
    RECIEVE_USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    RESET_USERINFO(state) {
        state.userInfo = {}
        state.token = ''
    }
}
const actions = {
    async userRegister(context, userInfo) {
        const result = await reqUserRegister(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async UserLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo)
        if (result.code === 200) {
            commit('RECIEVE_TOKEN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async userCode({ commit }, phone) {
        const result = await reqCode(phone)
        if (result.code === 200) {
            commit('RECIEVE_CODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async userInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 200) {
            commit('RECIEVE_USERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 删除token信息
    async resetUserInfo({ commit }) {
        removeToken();
        commit('RESET_USERINFO')
    },
    async userLogout({ commit }) {
        const result = await reqUserLogout()
        if (result.code === 200) {
            removeToken();
            commit('RESET_USERINFO')
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
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