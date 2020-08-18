<template>
	<div ref="bagHolder" class="bag-holder" :class="{active: isActive}">
		<div class="bg" @click="toggleBag"></div>
		<button class="shopping-cart" @click="toggleBag">
			<Icon
				name="shopping-cart"
				size="36"
			/>
            <span class="quantity" v-if="quantityItems !== 0">{{ quantityItems }}</span>
		</button>
		<form class="bag">
			<div class="close" @click="toggleBag"></div>
			<h2>Shopping Cart</h2>
			<div class="items">
				<p v-for="(item, i) in shoppingCartData" :key="i">x{{item.amount}} {{item.name}} <span>{{ item.price }} {{ currency }}</span><span class="delete" @click="deleteCart($event, i)"><Icon name="trash" size="20"/></span></p>
			</div>
			<p class="col props">Number of items: <span>{{ quantityItems }}</span></p>
			<p class="subtotal props">Subtotal: <span>{{ subTotal }} {{ currency }}</span></p>
			<p class="tax props">Tips: <span>10%</span></p>
			<p class="total props">Total: <span>{{ total}} {{ currency }}</span></p>
			<router-link to="/pay" @click.native="toggleBag" class="button">Checkout</router-link>
		</form>
	</div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
	data() {
		return {
			isActive: false,
			currency: 'zl',
		}
	},
	components: {
		Icon
	},
	computed: {
		quantityItems() {
			let quantityItem = 0;

			for (let i = 0; i < this.$store.state.shoppingCartData.length; i++) {
				quantityItem += this.$store.state.shoppingCartData[i].amount;
			}

			return quantityItem
		},
		shoppingCartData() {
			return this.$store.state.shoppingCartData
		},
		subTotal() {
			let subTotalSum = 0;
			for (let i = 0; i < this.$store.state.shoppingCartData.length; i++) {
				subTotalSum += this.$store.state.shoppingCartData[i].price;
			}
			return subTotalSum
		},
		total() {
			return (this.subTotal / 10 + this.subTotal).toFixed(2)
		}
	},
	methods: {
		toggleBag() {
			this.isActive = !this.isActive
		},
		deleteCart(e, i) {
			this.$store.dispatch('deleteCartData', i)
		},
	},
}
</script>

<style scoped lang="scss">
	.shopping-cart {
		color: $color1;
	}
</style>