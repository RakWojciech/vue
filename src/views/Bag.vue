<template>
	<div class="bag">
		<h1>{{offers[$route.params.index].title}}</h1>
	</div>
</template>
<script>
export default {
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
}
</script>
