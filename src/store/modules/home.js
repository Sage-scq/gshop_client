// 管理首页数据的vuex子模块
import { reqCategoryList, reqFloors, reqRecommends, reqBannerList, reqLike, reqRank } from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    recommendsList: [],
    floorsList: [],
    likeList: [],
    rankList: []
}
const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0, 15);
    },
    // 接收保存轮播数据
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    // mock今日推荐数据
    RECEIVE_RECOMMENDS_LIST(state, recommendsList) {
        state.recommendsList = recommendsList
    },
    // mock楼层数据
    RECEIVE_FLOOR_LIST(state, floorsList) {
        state.floorsList = floorsList
    },
    // mock喜欢模块
    RECEIVE_LIKE_LIST(state, likeList) {
        state.likeList = likeList
    },
    // mock排行模块
    RECEIVE_RANK_LIST(state, rankList) {
        state.rankList = rankList
    },
}
const actions = {
    // 获取三级列表的异步action
    async getCategoryList({ commit }) {
        // 调用接口请求函数发异步ajax请求
        // 请求成功了就取出数据给mutations保存
        const result = await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data;
            commit('RECEIVE_CATEGORY_LIST', categoryList)
        }
    },
    // 获取首页轮播图数据的action
    async getBannerList({ commit }) {
        // 调用接口请求函数发异步ajax请求
        // 请求成功了就取出数据给mutations保存
        const result = await reqBannerList();
        if (result.code === 200) {
            const bannerList = result.data;
            commit('RECEIVE_BANNER_LIST', bannerList)
        }
    },
    // 获取今日推荐mock数据
    async getRecommendsList({ commit }) {
        const result = await reqRecommends();
        if (result.code === 200) {
            const recommendsList = result.data;
            commit('RECEIVE_RECOMMENDS_LIST', recommendsList)
        }
    },
    // 获取floor的mock数据
    async getFloorsList({ commit }) {
        const result = await reqFloors();
        if (result.code === 200) {
            const floorsList = result.data;
            commit('RECEIVE_FLOOR_LIST', floorsList)
        }
    },
    // 获取like的mock数据
    async getLikeList({ commit }) {
        const result = await reqLike();
        if (result.code === 200) {
            const likeList = result.data;
            commit('RECEIVE_LIKE_LIST', likeList)
        }
    },
    // 获取rank的mock数据
    async getRankList({ commit }) {
        const result = await reqRank();
        if (result.code === 200) {
            const rankList = result.data;
            commit('RECEIVE_RANK_LIST', rankList)
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