<template>
<router-link :to="$router.currentRoute.path + '/' + url" class="item">
	<div class="img"><img :src="require(`@/assets/img/${image}`)" :alt="name"></div>
	<div class="text">
		<h2 class="name">{{name}}</h2>
		<div class="description">{{description}}</div>
	</div>
	<div class="price">
		<div>{{price}} zl</div>
		<div class="time">{{time}}</div>
	</div>
	<button class="arrow"></button>
</router-link>
</template>

<script>
export default {
	props: {
		image: 			{type: String, required: true},
		name: 			{type: String, required: true},
		price: 			{type: String, required: true},
		time: 			{type: String, required: true},
		description: 	{type: String, required: true},
		url: 			{type: String, required: true}
	},

	methods: {

	}
}
</script>

<style scoped lang="scss">
	.item {
		padding-right: 70px;
		margin-right: 33px;

		&:not(:last-child) {
			margin-bottom: 20px;
		}
	}

	.text {
		padding-right: 20px;
	}

	.name,
	.price {
		font: $t36 $gilroyExtraBold;
	}

	.name {
		color: $black;
	}

	.price {
		color: $color5;
	}

	.description,
	.time {
		font: $t20 $gilroyLight;
		color: $color2;
	}

	.description {
		width: $t700;
	}

	.time {
		text-align: right;
	}

	@media screen and (max-width: 1025px){
		#app {
			.item {
				margin-bottom: $m10 !important;
			}
		}
		.item {
			padding-left: $m40 !important;
			flex-flow: row wrap;
			padding-right: $m25;
		}
		.text {
			padding: 0;
			width: 100%;
		}
		.description{
			font-size: $m8;
		}
		.price {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-direction: row-reverse;
			div {
				font-size: $m15;
			}
			.time {
				font-size: $m8;
			}
		}
		h2 {
			font-size: $m15 !important;
		}
	}
</style>