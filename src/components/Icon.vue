<template>
	<svg
		@click="$emit('click:icon', $event)"
		:class="['icon', 'icon-'+name]"
		:style="{
			'width': size,
			'height': size,
			'font-size': size,
			'fill': fill
		}"
		xmlns="http://www.w3.org/2000/svg"
	>
		<use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
	</svg>
</template>

<script>
export default {
	props: {
		'name': {required: true},
		'size': {required: false, default: '50px'},
		'fill': {required: false}
	},
  	computed: {
    	iconPath() {
			let icon = require(`@/assets/img/icons/${this.name}.svg`)
			if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
				icon = icon.default;
			}
			return icon.url
		}
  	}
}
</script>

<style lang="scss" scoped>
	.icon {
		vertical-align: top;
		fill: currentColor;
	}
</style>