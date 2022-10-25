<template>
	<view>
		<view class="title">
			<text>天使童装</text>
			<view class="input">
				<input type="text" placeholder="输入搜索关键字">
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in lbt" :key="index">
				<image :src="item.picUrl" mode=""></image>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lbt: []
			};
		},
		methods: {
			async getlbt() {
				let {
					data: res
				} = await uni.$http.get('/hjl/banner/list')
				console.log(res);
				this.lbt = res.data.slice(4, 7)
			}

		},
		mounted() {
			this.getlbt()
		}

	}
</script>


<style lang="scss">
	.title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		margin-bottom: 5px;

		text {
			font-weight: 900;
			margin-left: 15px;
			margin-right: 15px;
		}

		input {
			background-color: #eaeffa;
			width: 220px;
			height: 40px;
			border-radius: 20px;
			padding-left: 19px;
		}
	}

	swiper image {
		width: 100%;
	}
</style>
`
