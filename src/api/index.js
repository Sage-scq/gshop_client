// 包含应用所有接口的请求函数
// 函数内部调用封装好的ajax函数进行请求
// 函数返回值是一个promise对象
import ajax from './ajax'
// 请求三级分类列表函数
export function reqCategoryList() {
    return ajax.get('/product/getBaseCategoryList')
}