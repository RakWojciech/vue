<template>
	<div class="offer">
		<div class="cards">
			<div class="cards" v-for="(offer, index) in offers" v-bind:key="index">
			<!-- <div class="card"> -->
				<div class="card-header">
					#{{index+1}}
				</div>
				<div class="card-body">
					<h5 class="card-title">{{offer.title}}</h5>
					<!-- <p class="card-text">----</p> -->
					<!--<a href="#" class="btn btn-primary" v-on:click="">Buy</a>-->
					<button class="btn btn-primary" v-on:click="addToBasket(offer, index)">Buy</button>
					<!-- <router-link to="about/10">Buy</router-link> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var products = [];
	console.log(products);
	var existProduct;
	export default {
		name: 'Produts',
		methods: {
			addToBasket(offer, index) {
				// alert(test);
				console.log(offer.title, index);
				existProduct = offer.title;
				if(products.includes(offer.title)) {
					
				}else{
					products.push(offer.title.toString());
					localStorage.setItem("products", JSON.stringify(products));
					this.$router.push({ name: 'bag', params: { index: index }})
				}
				// existProduct = localStorage.getItem("products");
				// for(var i = 0; i < products.length; i++) {
				// 	if(products[i].toString() == existProduct) {
				// 		console.log("EXIST PRODUCT");
				// 	}else{
				// 		console.log("OKK");
				// 	}
				// 	// console.log(products[i]);
				// }
			}
		},
		data() {
			return {
				offers: [
					{
						title: "but 1",
					},{
						title: "but 2",
					},
				]
			};
		}
	};
</script>
