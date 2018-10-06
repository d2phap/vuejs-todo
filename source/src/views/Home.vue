<template>
	<div class="ani-slideInDown row justify-content-center">
		<div class="col-lg-6">
			<ToDoInput />

			<List />
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ToDoInput from '@/components/ToDoInput.vue'
	import List from '@/components/List.vue'

	export default {
		name: "home",
		components: {
			ToDoInput,
			List
		}
	}
</script>
