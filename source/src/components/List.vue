<template>
	<ul class="list mt-3">
        <ListItem v-for="item in itemList" :key="item.id" :text="item.text" :id="item.id" :isDone="item.isDone" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete" />
    </ul>
</template>

<script>
    import ListItem from "@/components/ListItem.vue"

	export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                itemList: [
                    {
                        id: 10,
                        text: "Task 1",
                        isDone: false
                    },
                    {
                        id: 11,
                        text: "Task 2",
                        isDone: false
                    },
                    {
                        id: 12,
                        text: "Task 3",
                        isDone: false
                    },
                ]
            }
        },
        methods: {
            /**
             * Event: on task status changed
             */
            onTaskStatusChange(id, checked) {
                console.log(id, checked)

                let item = this.itemList.find(i => i.id == id)
                if (item) {
                    item.isDone = checked
                }
                
                console.log(this.itemList)
            },

            /**
             * Event: on task deleted
             */
            onTaskDelete(id) {
                console.log(id)

                let index = this.itemList.findIndex(i => i.id == id)
                if (index > -1) {
                    this.itemList.splice(index, 1)
                }

                console.log(this.itemList)
            },

            /**
             * Load item list from local storage
             */
            loadItemList() {
                this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || []

                console.log("this.itemList =", this.itemList)
            },

            /**
             * Update the item list to local storage
             */
            updateItemList() {
                localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList))
            }
        },
        mounted() {
            // Load item list from local storage
            this.loadItemList()
        },
        watch: {
            itemList: {
                handler(value) {
                    console.log("item changed")

                    // save to localStorage
                    this.updateItemList()
                },
                deep: true
            }
        }
	}
</script>

