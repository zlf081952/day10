<template>
	<view>
		<div class="top">
			<!-- 搜索栏 -->
			<uni-search-bar @input="input"></uni-search-bar>
		</div>
		<!--  -->
		<view class="search">
			<!-- 搜索历史 -->
			<text>历史记录</text>
			<!-- 删除 -->
			<uni-icons type="trash-filled" ></uni-icons>
		</view>
		<view class="sear_tag" >
			<view class="search_text" v-for="(item,index) in history" :key="index">
				<text>{{item}}</text>
				<button style="width: 100px;height: 30px;background-color: deepskyblue;line-height: 30px;border-radius: none;color: white;">刪除</button>
			</view>
		</view>
		<ul>
			<li class="list" v-for="item in searchList" :key="item.goods_id">
				<text>{{item.name}}</text>
				<image :src="item.pic" mode=""></image>
			</li>
		</ul>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				// 搜索的数据
				searchList: [],
				//防抖的计时器对象
				time: null
			};
		},
		methods: {
			...mapMutations(['addSearch']),
			// 输入内容防抖
			input(nameLike) {
				//防抖的逻辑代码
				this.time && clearTimeout(this.time)
				//防抖时的逻辑代码
				this.time = setTimeout(() => {
					// 调用请求接口
					//0.5秒以后执行调用 接口的方  并返回给定时器对象赋值给ttme变量
					this.getSearch(nameLike)
				}, 500)
			},
			//请求搜索数据
			async getSearch(nameLike) {
				let {data:res} = await uni.$http.post('/hjl/shop/goods/list/v2',{nameLike})
				// this.searchList = res.data.result
				console.log(res)
				//添加搜索历史
				this.addSearch(nameLike)
			}
		},
		mounted() {
			this.getSearch()
		},
		computed: {
			...mapState(['history'])
		}
	}
</script>

<style lang="scss">
	.search {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		border-bottom: 1px solid #eee;
	}

	.sear_tag {
		width: 100%;
		margin-top: 8px;
		.search_text{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			padding: 0 10px;
			text{
				width: 30px;
				height: 100%;
			}
			button{
				margin-left: 230px;
			}
		}
	}

	.list {
		display: flex;
		line-height: 40px;
		justify-content: space-between;
		padding: 0 10px;
		border-bottom: 1px solid gray;

		text {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	
</style>
