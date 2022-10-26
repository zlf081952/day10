<template>
	<view>
		<uni-search-bar @confirm="search"></uni-search-bar>
		<h1>历史搜索</h1>
		<div class="his" v-for="(item,index) in hisCarts" :key="index">
			<p>{{item}}</p>
			<uni-tag text="删除" type="primary" @click="delone(index)"></uni-tag>
		</div>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {

			};
		},
		methods: {
			...mapMutations(['addHisCarts', 'delone']),
			search(res) {
				if (res.value == "") {
					return console.log('为空咯');
				} else {
					this.addHisCarts(res.value)
					uni.navigateTo({
						url: '/subpkg/search_list/search_list?value=' + res.value
					})
				}
			}
		},
		computed: {
			...mapState(['hisCarts'])
		}
	}
</script>

<style lang="scss" scoped>
	h1 {
		padding: 20rpx;
		color: #777;
		border-bottom: 1px solid #ccc;
	}

	.his {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		border-bottom: 1px solid #ddd;
	}
</style>
