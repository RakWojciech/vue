<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">Add New Books</h3>
		</div>
		<div class="panel-body">
			<form id="form" class="form-inline" v-on:submit.prevent="addBook">
				<div class="inputs">
					<div class="form-group">
						<label for="author">Author:</label>
						<input type="text" id="author" class="form-control" v-model="newBook.author">
					</div>
					<div class="form-group">
						<label for="productTitle">Product Title:</label>
						<input type="text" id="booproductTitlekTitle" class="form-control" v-model="newBook.product_title">
					</div>
				</div>
				<input type="submit" class="btn btn-primary" value="Add Product">
				<input type="submit" class="btn btn__cancel btn-primary" value="Cancel">
			</form>
		</div>
	</div>
</template>

<script>
// import Firebase from 'firebase';

// const config = {
// 	apiKey: 'AIzaSyC4nbpocWNV0s4AXaI0l_d_3bC4HooG4t8',
// 	authDomain: 'vueshop-286e1.firebaseapp.com',
// 	databaseURL: 'https://vueshop-286e1.firebaseio.com',
// 	projectId: 'vueshop-286e1',
// 	storageBucket: 'vueshop-286e1.appspot.com',
// 	messagingSenderId: '1061933416290',
// };

// const app = Firebase.initializeApp(config);
// const db = app.database();
// const booksRef = db.ref('books');
export default {
	name: 'AddProduct',
	methods: {
		// addBook: function () {
		// 	booksRef.push(this.newBook);
		// 	this.newBook.author = '';
		// 	this.newBook.product_title = '';
		// },
	},
	data() {
		return {
			newBook: {
				title: '',
				author: '',
				url: 'http://'
			},
		};
	}
};
</script>

<style>

</style>
