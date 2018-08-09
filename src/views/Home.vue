<template>
	<div class="home">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<AddProduct/>
					<List/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';
import AddProduct from '@/components/AddProduct.vue';

export default {
	name: 'home',
	components: {
		List, AddProduct,
	},
};
</script>

<style lang="scss">
	.home {
		padding: 1rem;
	}
</style>

