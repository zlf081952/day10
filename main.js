// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 导入Vuex文件夹
import store from "@/store"
//引入$http对象，用于请求数据，类似于$axios
import {
	$http
} from "@escook/request-miniprogram"
// 引入请求基地址
$http.baseUrl = 'https://api.it120.cc/hjl/'
// 设置请求拦截器，在请求数据还没结束时提示用户加载中
$http.beforeRequest = function() {
	uni.showLoading({
		title: "加载中..."
	})
}
//设置响应拦截器，请求数据结束后关闭提示
$http.afterRequest = function() {
	uni.hideLoading()
}
// 将$http挂在在uni全局上方便使用
uni.$http = $http
//封装一个方法，请求数据失败时提示
$http.$showMsg = function() {
	uni.showToast({
		title: "请求数据失败",
		duration: 1500
	})
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
