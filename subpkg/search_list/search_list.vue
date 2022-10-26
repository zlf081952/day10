<template>
	<view>
		<header>
			<input type="text" v-model="value" @confirm="search">
			<uni-icons type="settings-filled" size="30" color="#777"></uni-icons>
		</header>
		<nav>
			<div>
				<p>综合</p>
			</div>
			<div>
				<p>新品</p>
			</div>
			<div>
				<p>销量</p>
			</div>
			<div>
				<p>价格</p>
			</div>
		</nav>
		<div class="list" v-for="(item,index) in searchList" :key="index">
			<img :src="item.pic" alt="">
			<aside>
				<h1>{{item.name}}</h1>
				<p>{{item.characteristic}}</p>
				<h2>￥{{item.minPrice}}<span>￥{{item.originalPrice}}</span></h2>
				<h3>已售出{{item.minBuyNumber}}件</h3>
				<uni-icons type="cart" size="36" color="red" class="icon"></uni-icons>
			</aside>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchList: [],
				value: ""
			};
		},
		onLoad(res) {
			// console.log(res);
			this.value = res.value
		},
		methods: {
			async getsearchList() {
				let {
					data: res
				} = await uni.$http.post('shop/goods/list/v2', {
					nameLike: this.value
				})
				console.log(res);
				this.searchList = res.data.result

			},
			search() {
				if (this.value == '') {
					this.getsearchList()
				} else {
					this.searchList = this.searchList.filter(item => {
						return item.name.includes(this.value)
					})
				}
			}
		},
		mounted() {
			this.getsearchList()
		}
	}
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;

		input {
			width: 80%;
			border: 1px solid #000;
			height: 60rpx;
			border-radius: 30rpx;
			padding-left: 40rpx;
			margin-right: 16rpx;
			background: url(@/static/my-icons/search.png) no-repeat 560rpx center;
			background-size: 60rpx;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 60rpx;
		font-weight: 700;
		padding-top: 60rpx;
		background-color: #fff;
		margin-bottom: 20rpx;

		p:hover {
			color: crimson;
		}
	}

	.list {
		background-color: #fff;
		width: 96%;
		height: 260rpx;
		margin: auto;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;

		img {
			height: 100%;
			width: 240rpx;
			border-radius: 10rpx;
		}

		aside {
			flex: 1;
			margin-left: 20rpx;
			position: relative;

			h1 {
				font-weight: 700;
				font-size: 30rpx
			}

			p,
			h3 {
				font-size: 24rpx;
				color: #777;
				margin: 10rpx 0;
			}

			h2 {
				color: red;
				font-weight: 700;

				span {
					font-size: 24rpx;
					text-decoration: line-through;
					color: #777;
				}
			}

			.icon {
				position: absolute;
				right: 12rpx;
				bottom: -24rpx;
			}
		}
	}
</style>
