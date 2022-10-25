
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//导入第三方模块
import {$http} from '@escook/request-miniprogram'
uni.$http = $http

//设置请求基地址
$http.baseUrl ='https://api.it120.cc'

//设置请求拦截器
$http.beforeRequest = function(){
	uni.showLoading({
		title:"正在加载中···"
	})
}
//设置响应了拦截器
$http.afterRequest=function(){
	//关闭加载提示
	uni.hideLoading()
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif