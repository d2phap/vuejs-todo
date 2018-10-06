<template>
	<form @submit="onAddNewTask">
		<input type="text" placeholder="What needs to be done?" v-model="text" required>
	</form>
</template>

<script>
	export default {
		name: "ToDoInput",
		data() {
			return {
				text: ""
			}
		},
		methods: {
			/**
			 * Event: add new task
			 */
			onAddNewTask(e) {
				e.preventDefault()
				const taskName = this.text

				this.$emit("eventAddNewTask", taskName)

				// reset the textbox
				this.text = ""
			}
		}
	}
</script>

