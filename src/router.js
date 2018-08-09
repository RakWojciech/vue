import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Bag from './views/Bag.vue';
// import AddProduct from './views/AddProduct.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/bag/:index',
			name: 'bag',
			component: Bag,
		},
		// {
		// 	path: '/add-product',
		// 	name: 'addProduct',
		// 	component: AddProduct,
		// }
	],
	mode: 'history',
});
