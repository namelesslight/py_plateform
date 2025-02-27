import axios from 'axios'
import { Message } from 'element-ui'

//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口
    baseURL: 'http://106.55.103.152:8089',
    // 超时时间 单位是ms，这里设置了20s的超时时间
    timeout: 20 * 1000
})

// 2.请求拦截器
service.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.headers = {
        'Content-Type':'application/json' //配置请求头
    }
    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    const token = window.localStorage.getItem('Token')
    if(token){
        config.headers.Token= token; //如果要求携带在请求头中
    }else {
        config.headers.Token = ''
    }
    return config
}, error => {
    Promise.reject(error)
})


// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
                error.message = `连接错误`
        }
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请刷新当前页')
        }
        error.message = '连接服务器失败'
    }

    Message.error(error.message)
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response)
})
//4.导入文件
export default service
