import {DoublyLinkedListNode} from "../../src"
describe("DoublyLinkedListNode", () => {
	let doublyLinkedListNode: DoublyLinkedListNode<number>
	beforeEach(() => {
		doublyLinkedListNode = new DoublyLinkedListNode<number>(1)
	})
	it("should create a node with a value", () => {
		expect(doublyLinkedListNode.getValue())
	})
})