<template>
	<div class="login">
		<div class="row">
			<div class="col-12">
				<h3>Sign in</h3>
                <input type="text" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
				<button type="button" name="button">Connection</button>
				<p>You don't have an account ? You can create one</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		firebase: {
		},
		methods: {

		},
		data() {

		}
	};
</script>
<style lang="scss">
</style>
