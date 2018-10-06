<template>
	<li class="list-item">
        <input type="checkbox" class="checkbox" :id="id">
        <label class="mr-3" :for="id"></label>
        <span class="text">
            Morbi in laoreet quam. Sed molestie faucibus ultrices. in laoreet quam. Sed molestie faucibus ultrices
        </span>
        <span class="icon-delete"></span>
    </li>
</template>

<script>
	export default {
        name: "ListItem",
        props: {
            id: {
                type: String,
                default: () => `chkItem-${Math.ceil(Math.random() * 1000)}`
            }
        }
    }
</script>

