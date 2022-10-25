<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item"></view>
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
				}
				await uni.$http.get('')
			}
		},
		mounted() {
			this.getlbt()
		}
	}
</script>

<style lang="scss">

</style>
`
