// axios二次封装
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 1.配置通用的基础路径和超时
const service = axios.create({
    baseURL: '/api', //基础路径
    timeout: 20000, //超时时间

})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 2.显示请求进度条 在请求拦截器中做
    Nprogress.start()


    // 必须返回config
    return config // 后面根据返回的config，使用xhr发送请求
})
// 添加响应拦截器
service.interceptors.response.use(
    response => { // 成功的回调
        // 隐藏进度条，在请求结束后做
        Nprogress.done()
        // 3.成功的数据返回的不是respond直接是response.data
        return response.data;
    },
    error => { // 失败的回调
        // throw error
        Nprogress.done()
        // 统一处理错误
        alert(error.message || '未知请求错误')
        return Promise.reject(error) // 将错误传递下去 不能写return error 不然相当于成功
    }
)



// 暴露service
export default service
