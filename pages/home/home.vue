<template>
	<view>
		<view class="title">
			<text>天使童装</text>
			<view class="input">
				<input type="text" placeholder="输入搜索关键字" @focus="toSearchlist">
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in lbt" :key="index">
				<image :src="item.picUrl" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<ul class="nav_ul">
				<li>上装</li>
				<li>裤装</li>
				<li>特价区</li>
				<li>裙装</li>
				<li>套装</li>
				<li>外套</li>
				<li>秒杀</li>
				<li>内裤</li>
				<li>袜子</li>
				<li>鞋</li>
			</ul>
		</view>
		<view class="p">
			<P>商品列表</P>
		</view>
		<view class="list">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<image :src="item.pic" mode=""></image>
					<p>{{item.name}}</p>
					<p style="font-size: 14px;color:#ccc">{{item.characteristic}}</p>
					<p><span style="color: red;font-size: 19px;">￥{{item.minPrice}}</span><span
							style="color: #bbb;font-size: 14px; text-decoration: line-through">￥{{item.originalPrice}}</span>
					</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lbt: [],
				list: []
			};
		},
		methods: {
			async getlbt() {
				let {
					data: res
				} = await uni.$http.get('/hjl/banner/list')
				// console.log(res);
				this.lbt = res.data.slice(4, 7)
			},
			async getlist() {
				let {
					data: res
				} = await uni.$http.post('/hjl/shop/goods/list/v2')

				this.list = res.data.result
				console.log(this.list);
			},
			toSearchlist() {
				uni.navigateTo({
					url: '/subpkg/search_detail/search_detail'
				})
			}

		},
		mounted() {
			this.getlbt()
			this.getlist()
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

	.nav_ul {
		width: 100%;
		height: 260rpx;
		display: flex;
		margin-top: 30px;
		flex-wrap: wrap;
		align-items: center;
		align-content: space-around;

		padding-left: 15px;

		li {
			flex: 20%;
		}
	}

	.p {
		width: 100%;
		text-align: center;
	}

	.list {
		width: 100%;

		ul {
			width: 100%;
			height: 500px;
			display: flex;
			flex-wrap: wrap;

			image {
				width: 100%;
			}

			li {
				width: 46%;
				border: 1px solid #ccc;
				margin: 5px;
				border-radius: 8px;
			}
		}
	}
</style>
