import { expect } from "chai"
import { shallowMount, mount } from "@vue/test-utils"
import Home from "@/views/Home.vue"

/**
 * Mock for window.localStorage
 */
class LocalStorageMock {
	constructor() {
		this.store = {}
	}

	clear() {
		this.store = {}
	}

	getItem(key) {
		return this.store[key] || null
	}

	setItem(key, value) {
		this.store[key] = value.toString()
	}

	removeItem(key) {
		delete this.store[key]
	}
}

global.localStorage = new LocalStorageMock()



describe("Home.vue", () => {
	it("renders 3 list Items inside .list", () => {
        const data = [
			{
				id: 10,
				text: "Task 1",
				isDone: false
			},
			{
				id: 11,
				text: "Task 2",
				isDone: true
			},
			{
				id: 12,
				text: "Task 3",
				isDone: false
			}
        ]

        const wrapper = mount(Home)
        wrapper.setData({
            itemList: data
        })
		

		expect(wrapper.findAll(".list > li").length).to.equal(3)
    })
    

    it("load task list from localStorage loadItemList", () => {
        const wrapper = mount(Home)
        wrapper.vm.loadItemList()

        expect(wrapper.vm.itemList.length).to.equal(3)
        expect(wrapper.findAll(".list > li").length).to.equal(3)
    })


    it("add new task onAddNewTask", () => {
        const wrapper = mount(Home)
        wrapper.setData({
            itemList: []
        })

        wrapper.vm.onAddNewTask("New Task")
        expect(wrapper.vm.itemList.length).to.equal(1)
        expect(wrapper.findAll(".list > li").length).to.equal(1)
    })
    

    it("update task status onTaskStatusChange", () => {
        const wrapper = mount(Home)
        wrapper.setData({
            itemList: [{
                id: 100,
                text: "Task 100",
                isDone: false
            }]
        })

        wrapper.vm.onTaskStatusChange(100, true)

        expect(wrapper.vm.itemList.length).to.equal(1)
        expect(wrapper.vm.itemList[0].isDone).to.equal(true)
    })
    

    it("remove a task onTaskDelete", () => {
        const data = [
			{
				id: 10,
				text: "Task 1",
				isDone: false
			},
			{
				id: 11,
				text: "Task 2",
				isDone: true
			},
			{
				id: 12,
				text: "Task 3",
				isDone: false
			}
        ]

        const wrapper = mount(Home)
        wrapper.setData({
            itemList: data
        })

        const id = 12
        wrapper.vm.onTaskDelete(id)

        expect(wrapper.vm.itemList.length).to.equal(2)
        expect(wrapper.findAll(".list > li").length).to.equal(2)

        const index = wrapper.vm.itemList.findIndex(i => i.id == id)
        expect(index).to.equal(-1)
    })
    

})
