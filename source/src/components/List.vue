<template>
	<ul class="list mt-3">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </ul>
</template>

<script>
    import ListItem from "@/components/ListItem.vue"

	export default {
        name: "List",
        components: {
            ListItem
        }
	}
</script>

