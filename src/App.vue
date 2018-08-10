<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item active">
						<!-- <router-link to="/bag" class="nav-link">Bag ()</router-link> -->
					</li>
					<li class="nav-item active">
						<router-link to="/add-product" class="nav-link">Add Product</router-link>
					</li>
					<li class="nav-item active">
						<router-link to="/bag" class="nav-link"> <img src="./assets/bag.svg" alt="">
							<b v-if="product">({{products.length}})</b>
						 </router-link>
					</li>
					<li class="nav-item active">
						<router-link to="/login" class="nav-link">Login</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<router-view/>
	</div>
</template>
<script>

export default {
	data() {
		return {
			products: JSON.parse(localStorage.getItem('products')),
		};
	},
};
</script>

<style lang="scss">
	body {
		background-color: #e3e3e3;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.gap {
		padding: 1rem;
	}
	.btn {
		background-color: #7331e2;
		border: none;
		color: #fff;
		margin: 1rem;
		border-radius: 0;
		&:hover {
			background-color: darken(#7331e2, 10%);
		}
		&__cancel {
			background-color: red;
			&:hover {
				background-color: darken(red, 10%);
			}
		}
	}
</style>
