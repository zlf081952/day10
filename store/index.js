import Vue from "vue"

import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		hisCarts: JSON.parse(uni.getStorageSync('hisCarts') || '[]')
	},
	getters: {},
	mutations: {
		saveHisCarts(state) {
			uni.setStorageSync('hisCarts', JSON.stringify(state.hisCarts))
		},
		addHisCarts(state, val) {
			state.hisCarts.push(val)
			this.commit('saveHisCarts')
		},
		delone(state, index) {
			state.hisCarts.splice(index, 1)
			this.commit('saveHisCarts')
		}
	},
	actions: {},
	modules: {}
})
