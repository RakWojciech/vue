import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Bag from './views/Bag.vue';
import Login from './views/Login.vue';
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
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
	],
	mode: 'history',
});
