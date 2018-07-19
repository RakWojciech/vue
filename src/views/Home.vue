<template>
	<div class="home">
		<img src="../assets/logo.png">
		<!-- <Offer msg="Welcome to Your Vue.js App"/> -->
		
		
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<List/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import Offer from '@/components/Offer.vue';
import List from '@/components/List.vue';

export default {
	name: 'home',
	components: {
		Offer, List,
	},
};
</script>
