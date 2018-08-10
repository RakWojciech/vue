<template>
	<div class="offer">
		<div class="row">
			<div class="col-12" v-for="(book, index) in books" v-bind:key="index">
				<!-- <div class="card">
					<div class="card-header">
						#{{index+1}}
					</div> -->
					<!-- <div class="card-body"> -->

						<div class="product-box w-100 d-flex align-items-center justify-content-between">
							<div class="product w-100">
								<h4 class="product__text product__text--title"> <router-link :to="`/bag/${book['.key']}`">{{book.product_title}}</router-link> </h4>
								<h6 class="product__text product__text--author">Od <span>{{book.author}}</span></h6>
							</div>
							<button class="btn product-box__btn" v-on:click="addToBasket(book, index)">+</button>
						</div>
						<!-- <router-link to="about/10">Buy</router-link> -->
					<!-- </div> -->
				<!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase';

	// const db = app.database();
	// const booksRef = db.ref('books');
	//
	// var products = [];
	// console.log(products);
	// var existProduct;
	export default {
		name: 'Produts',
		firebase: {
			// books: booksRef,
		},
		methods: {
			// addToBasket(offer, index) {
			// 	console.log("offer",offer);
			// 	console.log(offer.product_title, index);
			// 	// existProduct = offer.product_title;
			// 	if(products.includes(offer.product_title)) {
			//
			// 	}else{
			// 		products.push(offer.product_title.toString());
			// 		localStorage.setItem("products", JSON.stringify(products));
			// 		this.$router.push({ name: 'bag', params: { index: index }})
			// 	}
			// },
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
<style lang="scss">
.product-box {
	padding: 1rem;
	margin-top: 1rem;
	// background-color: #e3e3e3;
	border-bottom: 1px solid darken(#e3e3e3, 5%);
	.product {
		&__text {
			margin: 0;
		}
	}
	&__btn {
		//
	}
}
</style>
