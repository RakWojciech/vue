<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/bag">Bag ({{products.length}})</router-link>
		</div> -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<!-- <a class="navbar-brand" href="#">Navbar</a> -->
			<!-- <router-link to="/" class="navbar-brand">Home</router-link>  -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item active">
					<router-link to="/bag" class="nav-link">Bag ({{products.length}})</router-link>
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
		}
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
