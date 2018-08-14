<template>
	<div class="home gap">
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
import List from '@/views/List.vue';
import AddProduct from '@/views/AddProduct.vue';

export default {
	name: 'home',
	components: {
		List, AddProduct,
	},
};
</script>
