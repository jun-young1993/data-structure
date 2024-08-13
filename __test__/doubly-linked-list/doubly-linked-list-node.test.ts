import {DoublyLinkedListNode} from "../../src"
describe("DoublyLinkedListNode", () => {
	let doublyLinkedListNode: DoublyLinkedListNode<number>
	let previousDoublyLinkedListNode: DoublyLinkedListNode<number>
	let nextDoublyLinkedListNode: DoublyLinkedListNode<number>
	beforeEach(() => {
		previousDoublyLinkedListNode = new DoublyLinkedListNode<number>(5)
		doublyLinkedListNode = new DoublyLinkedListNode<number>(10)
		nextDoublyLinkedListNode = new DoublyLinkedListNode<number>(20)
	})

	it("should create a node with a value", () => {
		expect(doublyLinkedListNode.getValue()).toBe(10)
		expect(doublyLinkedListNode.getPrev()).toBeNull()
		expect(doublyLinkedListNode.getNext()).toBeNull()
	})

	it("should set and get the next node", () => {
		
		doublyLinkedListNode.setNext(nextDoublyLinkedListNode)

		expect(doublyLinkedListNode.getNext()).toBe(nextDoublyLinkedListNode)
		expect(doublyLinkedListNode.getPrev()).toBeNull()
	})

	it("should set and get the Previous node", () => {
		
		doublyLinkedListNode.setPrev(previousDoublyLinkedListNode)

		expect(doublyLinkedListNode.getNext()).toBeNull()
		expect(doublyLinkedListNode.getPrev()).toBe(previousDoublyLinkedListNode)
	})

	it("should check if there is a preivous node", () => {
		expect(doublyLinkedListNode.isPrev()).toBe(false)
		doublyLinkedListNode.setPrev(previousDoublyLinkedListNode)
		expect(doublyLinkedListNode.isPrev()).toBe(true)
	})

	it("should check if there is a next node", () => {
		expect(doublyLinkedListNode.isNext()).toBe(false)
		doublyLinkedListNode.setNext(previousDoublyLinkedListNode)
		expect(doublyLinkedListNode.isNext()).toBe(true)
	})

})