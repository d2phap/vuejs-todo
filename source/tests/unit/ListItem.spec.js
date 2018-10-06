import { expect } from "chai"
import { shallowMount } from "@vue/test-utils"
import ListItem from "@/components/ListItem.vue"

describe("ListItem.vue", () => {
	it("renders props.id on checkbox[id] when passed", () => {
		const id = 1000
		const wrapper = shallowMount(ListItem, {
			propsData: { id }
        })
        
        expect(wrapper.find(`[type="checkbox"]`).attributes(["id"])).to.include(`item-${id}`)
        expect(wrapper.find(`label`).attributes(["for"])).to.include(`item-${id}`)
    })


    it("renders props.isDone = true when passed", () => {
		const isDone = true
		const wrapper = shallowMount(ListItem, {
			propsData: { isDone }
        })
        
        const isChecked = wrapper.find(`[type="checkbox"]`).is(":checked")
        
        expect(wrapper.classes()).to.contain("done")
        expect(isChecked).to.be.equal(true)
    })

    
    it("renders props.text when passed", () => {
		const text = `New todo item`
		const wrapper = shallowMount(ListItem, {
			propsData: { text }
		})
		expect(wrapper.text()).to.include(text)
    })

    
    it("emit eventTaskStatusChange event when check changed", () => {
        const wrapper = shallowMount(ListItem)
        const chk = wrapper.find(`[type="checkbox"]`)

        chk.trigger("change")
        const idComputed = chk.attributes("id")
        const id = parseInt(idComputed.split("-")[1])
        const checked = chk.checked

        expect(wrapper.emitted().eventTaskStatusChange[0].length).to.be.equal(2)
        expect(wrapper.emitted().eventTaskStatusChange[0][0]).to.equal(id)
        expect(wrapper.emitted().eventTaskStatusChange[1]).to.equal(checked)
    })
    

    it("emit eventTaskDelete event when check changed", () => {
        const wrapper = shallowMount(ListItem)
        const btn = wrapper.find(".icon-delete")

        btn.trigger("click")
        const idComputed = wrapper.find(`[type="checkbox"]`).attributes("id")
        const id = parseInt(idComputed.split("-")[1])

        expect(wrapper.emitted().eventTaskDelete[0].length).to.be.equal(1)
        expect(wrapper.emitted().eventTaskDelete[0][0]).to.equal(id)
	})
})
