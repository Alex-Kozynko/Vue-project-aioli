import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pageTitle: '',
		shoppingCartData: [],
		currentCatIndex: null,
		cats: [
			{
				url: 'soups',
				imgSrc: 'zupa_categories.png',
				text: 'Zupy',
				items: [{
						image: 'soup/soup1.png',
						name: 'Zupa1',
						price: '15.50',
						time: '15 min',
						description: 'halloumi, tzatziki with mint, grilled zucchini,mixed lettuce, sugar onion, tomato',
						url: 'greek-halloumi-burger'
					},
					{
						image: 'soup/soup2.png',
						name: 'Zupa2',
						price: '20.10',
						time: '30 min',
						description: 'chicken marinated in mango, arugula, lamb’s lettuce, cherry tomatoes, aioli sauce',
						url: 'italian-pinchon'
					},
					{
						image: 'soup/soup3.png',
						name: 'Zupa3',
						price: '19.90',
						time: '25 min',
						description: 'tomato sauce San Marzano, mozzarella Galbani, sauce aioli',
						url: 'aioli-margarita'
					},
					{
						image: 'soup/soup4.png',
						name: 'Zupa4',
						price: '39.90',
						time: '20 min',
						description: 'shrimps, chorizo Barbacoa Piccante, tomato sauce San Marzano, butter, garlic, onion, cherry tomatoes, chili, lemon, baguette',
						url: 'spanish-shrimps'
					}
				]
			},
			{
				url: 'salads',
				imgSrc: 'salatca_categories.png',
				text: 'Sałatka',
				items: [{
					image: 'salad/salad1.jpg',
					name: 'Sałatka1',
					price: '15.50',
					time: '15 min',
					description: 'halloumi, tzatziki with mint, grilled zucchini,mixed lettuce, sugar onion, tomato',
					url: 'greek-halloumi-burger'
				},
					{
						image: 'salad/salad2.jpg',
						name: 'Sałatka2',
						price: '20.10',
						time: '30 min',
						description: 'chicken marinated in mango, arugula, lamb’s lettuce, cherry tomatoes, aioli sauce',
						url: 'italian-pinchon'
					},
					{
						image: 'salad/salad3.jpg',
						name: 'Sałatka3',
						price: '19.90',
						time: '25 min',
						description: 'tomato sauce San Marzano, mozzarella Galbani, sauce aioli',
						url: 'aioli-margarita'
					},
					{
						image: 'salad/salad4.jpg',
						name: 'Sałatka4',
						price: '39.90',
						time: '20 min',
						description: 'shrimps, chorizo Barbacoa Piccante, tomato sauce San Marzano, butter, garlic, onion, cherry tomatoes, chili, lemon, baguette',
						url: 'spanish-shrimps'
					}
				]
			},
			{
				url: 'main-dishes',
				imgSrc: 'glowne_categories.png',
				text: 'Dania główne',
				items: [{
					image: 'main/burger.png',
					name: 'Greek halloumi burger',
					price: '15.50',
					time: '15 min',
					description: 'halloumi, tzatziki with mint, grilled zucchini,mixed lettuce, sugar onion, tomato',
					url: 'greek-halloumi-burger'
				},
					{
						image: 'main/italic.png',
						name: 'Italian pinchon',
						price: '20.10',
						time: '30 min',
						description: 'chicken marinated in mango, arugula, lamb’s lettuce, cherry tomatoes, aioli sauce',
						url: 'italian-pinchon'
					},
					{
						image: 'main/pizza.png',
						name: 'Aioli margarita',
						price: '19.90',
						time: '25 min',
						description: 'tomato sauce San Marzano, mozzarella Galbani, sauce aioli',
						url: 'aioli-margarita'
					},
					{
						image: 'main/fish.png',
						name: 'Spanish shrimps (5pcs)',
						price: '39.90',
						time: '20 min',
						description: 'shrimps, chorizo Barbacoa Piccante, tomato sauce San Marzano, butter, garlic, onion, cherry tomatoes, chili, lemon, baguette',
						url: 'spanish-shrimps'
					}
				]
			},
			{
				url: 'bar',
				imgSrc: 'bar_categories.png',
				text: 'Bar',
				items: [
					{
						image: 'bar/drink1.png',
						name: 'Koktajl1',
						price: '19.90',
						time: '25 min',
						description: 'tomato sauce San Marzano, mozzarella Galbani, sauce aioli',
						url: 'aioli-margarita'
					},
					{
						image: 'bar/drink2.png',
						name: 'Koktajl2',
						price: '39.90',
						time: '20 min',
						description: 'shrimps, chorizo Barbacoa Piccante, tomato sauce San Marzano, butter, garlic, onion, cherry tomatoes, chili, lemon, baguette',
						url: 'spanish-shrimps'
					},
					{
						image: 'bar/beer1.png',
						name: 'Piwo1',
						price: '15.50',
						time: '15 min',
						description: 'halloumi, tzatziki with mint, grilled zucchini,mixed lettuce, sugar onion, tomato',
						url: 'greek-halloumi-burger'
					},
					{
						image: 'bar/beer2.png',
						name: 'Piwo2',
						price: '20.10',
						time: '30 min',
						description: 'chicken marinated in mango, arugula, lamb’s lettuce, cherry tomatoes, aioli sauce',
						url: 'italian-pinchon'
					},
					{
						image: 'bar/beer3.png',
						name: 'Piwo3',
						price: '19.90',
						time: '25 min',
						description: 'tomato sauce San Marzano, mozzarella Galbani, sauce aioli',
						url: 'aioli-margarita'
					},
					{
						image: 'bar/beer4.png',
						name: 'Piwo4',
						price: '39.90',
						time: '20 min',
						description: 'shrimps, chorizo Barbacoa Piccante, tomato sauce San Marzano, butter, garlic, onion, cherry tomatoes, chili, lemon, baguette',
						url: 'spanish-shrimps'
					}
				]
			}
		]
	},

	mutations: {
		setpageTitle(state, payload) {
			state.pageTitle = payload
		},

		setShoppingCartData(state, payload) {
			let newCart = 0;
			for (let i = 0; i < state.shoppingCartData.length; i++) {
				if (state.shoppingCartData[i].name === payload.name) {
					state.shoppingCartData[i].amount += payload.amount;
					state.shoppingCartData[i].price += payload.price;
				} else {
					newCart += 1;
				}
			}
			if (newCart === state.shoppingCartData.length || state.shoppingCartData.length === 0) {
				state.shoppingCartData = state.shoppingCartData.concat(payload);
			}
		},

		deleteCartData(state, payload) {
			state.shoppingCartData.splice(payload, 1)
		},

		setCurrentCatIndex(state, payload) {
			state.currentCatIndex = payload
		}
	},

	actions: {
		setPageTitle({commit}, title) {
			commit('setpageTitle', title)
		},

		setShoppingCartData({commit}, data) {
			commit('setShoppingCartData', data)
		},

		deleteCartData({commit}, index) {
			commit('deleteCartData', index)
		},

		setCurrentCatIndex({commit}, index) {
			commit('setCurrentCatIndex', index)
		}
	}
})