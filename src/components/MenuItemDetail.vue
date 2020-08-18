<template>
	<div class="detail">
		<div class="item detail-item">
			<div class="img"><img :src="require(`@/assets/img/${item.image}`)" alt=""></div>
			<div class="text">
				<div class="top">
					<h2 class="name">{{item.name}}</h2>
					<div class="description">{{item.description}}</div>
				</div>
				<div class="bottom">
					<div class="left">
						<div class="amount">
							<button class="remove" @click="decrementItem"></button>
							{{amount}}
							<button class="add" @click="incrementItem"></button>
						</div>
						<div class="price">{{item.price}}</div>
						<div class="time">{{item.time}}</div>
					</div>
					<button
						class="button-buy"
						:class="{success: isAddedToCart}"
						@click="addToCart($event)"
					>
					<span v-show="!isAddedToCart">Buy</span>
					</button>
				</div>
			</div>
		</div>

		<div class="popular">
			<!-- <div class="item">
				<div class="img"><img :src="require(`@/assets/img/${item.image}`)" alt=""></div>
				<div class="text">
					<h2 class="name">Greek halloumi burger</h2>
					<div class="description">
						halloumi, tzatziki with mint, grilled zucchini,mixed lettuce, sugar onion, tomato
					</div>
					<div class="price">
						<div>15,50zl</div>
						<div class="time">15 min</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},

	data() {
		return {
			url: this.$router.currentRoute.params['menuItem'],
			url2: this.$router.currentRoute.params['menuItemDetail'],
			amount: 1,
			isAddedToCart: false
		}
	},

	computed: {
		item() {
			for (let i = 0; i < this.$store.state.cats.length; i++) {
				if (this.$store.state.cats[i].url === this.url) {
					for (let j = 0; j < this.$store.state.cats[i].items.length; j++) {
						if (this.$store.state.cats[i].items[j].url === this.url2) {
							return this.$store.state.cats[i].items[j]
						}
					}
				}
			}
		},

		shoppingCartData() {
			return this.$store.state.shoppingCartData
		}
	},

	beforeRouteEnter(to, from, next) {
		next((vm) => vm.$store.dispatch('setPageTitle', 'Detail'))
	},

	methods: {
		incrementItem() {
			this.amount = ++this.amount
		},

		decrementItem() {
			this.amount = --this.amount || 1
		},

		addToCart(event) {
			this.$store.dispatch('setShoppingCartData', {
				name: this.item.name,
				price: +this.item.price,
				amount: this.amount
			})

			if (!this.isAddedToCart) {
				this.isAddedToCart = true
			}

			setTimeout(() => {
				this.isAddedToCart = false
			}, 2000)

			this.$router.go(-1)
		}
	}
}
</script>

<style lang="scss">
	body.menuItemDetail {
		background-position: 0 0;
		.shopping-cart {
			color: $white;
		}
	}
	.detail-item {
		justify-content: initial;
		align-items: initial;
		overflow: hidden;
		height: auto;
		margin: 0;
		padding: 0;
		cursor: default;
		.name,
		.price {
			font: $t36 $gilroyExtraBold;
		}
		.description,
		.time {
			font: $t20 $gilroyLight;
			color: $color2;
		}
		.name {
			padding-bottom: $t10;
			color: $black;
		}

		.price {
			color: $color5;
		}
		.img {
			position: static;
			width: $t360;
			height: $t320;
			border-radius: 0;
			box-shadow: none;
		}

		.text {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			padding: $t40 $t20 $t30;
		}

		.top {
			margin-bottom: auto;
		}

		.bottom,
		.left {
			display: flex;
			align-items: center;
		}

		.bottom {
			justify-content: space-between;
		}

		.price {
			margin-left: $t40;
		}

		.time {
			margin-left: $t60;
		}

		.amount {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: $t150;
			height: $t50;
			font: #{$t30}/1 $gilroyExtraBold;
			text-align: center;
			color: $black;
			background: $color3;
			border-radius: 50px;


			.add,
			.remove {
				position: absolute;
				width: $t50;
				height: 100%;

				&::before,
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					display: block;
					background: $color2;
					transform: translate(-50%, -50%);
				}

				&::before {
					width: $t16;
					height: $t2;
					min-height: 1px;
				}
			}

			.remove {
				top: 0;
				left: 0;
			}

			.add {
				top: 0;
				right: 0;

				&::after {
					width: $t2;
					height: $t16;
					min-width: 1px;
				}
			}
		}

		.button-buy {
			position: relative;
			overflow: hidden;
			width: $t187;
			height: $t67;
			font: $t26 $gilroyExtraBold;
			color: $black;
			background-color: $color4;
			border-radius: 50px;

			&.success {
				pointer-events: none;
				color: $white;
				background-color: $success;
				font-size: $t30;

				&::before {
					content: '\2714';
					display: block;
					margin: auto;
					width: $t45;
					height: $t45;
					border: 2px solid $white;
					border-radius: 100%;
				}
			}
		}
	}
</style>