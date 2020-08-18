<template>
	<div class="menu" v-on:scroll.native="handleScroll">
		<div class="items">
			<MenuItem
				v-for="(item, index) in cat"
				:key="index"
				:image="item.image"
				:name="item.name"
				:price="item.price"
				:time="item.time"
				:description="item.description"
				:url="item.url"
			/>
		</div>
	</div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
	components: {
		MenuItem
	},

	data() {
		return {
			url: this.$router.currentRoute.params['menuItem']
		}
	},

	computed: {
		catIndex() {
			return  this.$store.state.currentCatIndex
		},

		cat () {
			for (let i = 0; i < this.$store.state.cats.length; i++) {
				if (this.$store.state.cats[i].url === this.url) {
					return this.$store.state.cats[i].items
				}
			}
		}
	},

	methods: {
		handleScroll() {
			if (window.scrollY > 0)	{
				document.querySelector('.header').classList.add('scroll')
			} else {
				document.querySelector('.header').classList.remove('scroll')
			}
		}
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => vm.$store.dispatch('setPageTitle', 'Menu'))
	}
}
</script>

<style lang="scss">
	body.menu {
		background-position: 0 0;
		.shopping-cart {
			color: $white;
		}
	}
</style>