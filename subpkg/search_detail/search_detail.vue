<template>
	<view>
		<!-- 搜索框 -->
		<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
		<view class="history_box">
			<text style="color: gray;margin-left: 10px;">历史搜索</text>
			<view>
				<view class="history_list">
					<text>毛衣</text>
					<button style="background-color: dodgerblue;color: aliceblue;line-height: 25px;">删除×</button>
				</view>
				<view class="history_list">
					<text>毛衣</text>
					<button style="background-color: dodgerblue;color: aliceblue;line-height: 25px;">删除×</button>
				</view>
				<view class="history_list">
					<text>毛衣</text>
					<button style="background-color: dodgerblue;color: aliceblue;line-height: 25px;">删除×</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.history_list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 10px 10px;
		border-bottom: 1px solid #ccc;
		button {
			width: 70px;
			height: 25px;
			font-size: 12px;
			margin-left: 250px;
		}
	}
</style>
