// 包含应用所有接口的请求函数
// 函数内部调用封装好的ajax函数进行请求
// 函数返回值是一个promise对象
import ajax from './ajax'
import mockAjax from './mockAjax'
// 请求三级分类列表函数
export function reqCategoryList() {
    return ajax.get('/product/getBaseCategoryList')
}
// 获取首页广告轮播
export function reqBannerList() {
    return ajax.get('/cms/banner')
}
// mock接口函数
export function reqRecommends() {
    return mockAjax.get('/recommends')
}
export function reqFloors() {
    return mockAjax.get('/floors')
}
export function reqLike() {
    return mockAjax.get('/like')
}
export function reqRank() {
    return mockAjax.get('/rank')
}

// 搜索分类列表
export function reqSearch(searchParams) {
    return ajax.post('/list', searchParams)
}
// 获取详情
export function reqDetail(skuId) {
    return ajax.get(`/item/${skuId}`)
}
// 添加购物车
export function reqAddOrUpdateCart(skuId, skuNum) {
    return ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
    // return ajax({
    //     url: `/cart/addToCart/${skuId}/${skuNum}`,
    //     method: 'post'
    // })
}
// 获取购物车列表
export function reqCartList() {
    return ajax.get(`/cart/cartList`)
}

export function reqUpdateCartChecked(skuId, isChecked) {
    return ajax({
        url: `cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    }
    )
}
// 删除购物车
export function reqDeleteOne(skuId) {
    return ajax({
        url: `cart/deleteCart/${skuId}`,
        method: 'delete'
    }
    )
}
// 测试请求
// reqUpdateCartChecked(4, 0).then(result => {
//     console.log(result);
// })
// reqCartList().then(result => {
//     console.log(result);
// })