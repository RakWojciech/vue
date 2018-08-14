import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App.vue';
import router from './router';
import Firebase from 'firebase';

Vue.use(VueFire);
Vue.config.productionTip = false;



var config = {
	apiKey: 'AIzaSyC4nbpocWNV0s4AXaI0l_d_3bC4HooG4t8',
	authDomain: 'vueshop-286e1.firebaseapp.com',
	databaseURL: 'https://vueshop-286e1.firebaseio.com',
	projectId: 'vueshop-286e1',
	storageBucket: 'vueshop-286e1.appspot.com',
	messagingSenderId: '1061933416290',
};
Firebase.initializeApp(config);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
