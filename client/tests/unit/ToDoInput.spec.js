import { expect } from "chai"
import { shallowMount } from "@vue/test-utils"
import ToDoInput from "@/components/ToDoInput.vue"

describe("ToDoInput.vue", () => {
	it("emit eventAddNewTask event when form submitted", () => {
        const wrapper = shallowMount(ToDoInput)

        const taskName = "New Task"
        wrapper.vm.text = taskName

        const form = wrapper.find("form")
        form.trigger("submit")
        
        expect(wrapper.emitted().eventAddNewTask[0].length).to.be.equal(1)
        expect(wrapper.emitted().eventAddNewTask[0][0]).to.include(taskName)
	})
})
