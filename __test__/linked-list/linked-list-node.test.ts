import {LinkedListNode} from '../../src/index'
describe('LinkedListNode', () => {
	let linkedListNumberNode: LinkedListNode<number>
	let linkedListStringNode: LinkedListNode<string>
	
	beforeEach(() => {
		linkedListNumberNode = new LinkedListNode<number>(1)
		linkedListStringNode = new LinkedListNode<string>('test')
	})

	test('should create an instance of LinkedListNode<number>', () => {
		expect(linkedListNumberNode).toBeInstanceOf(LinkedListNode); // Check if it is an instance of LinkedListNode
		expect(linkedListNumberNode.getValue()).toBe(1); // Check the value
		expect(typeof linkedListNumberNode.getValue()).toBe('number'); // Check the value type
		expect(linkedListNumberNode.getNext()).toBe(null); // Check the value type
	});

	test('should create an instance of LinkedListNode<string>', () => {
		expect(linkedListStringNode).toBeInstanceOf(LinkedListNode); // Check if it is an instance of LinkedListNode
		expect(linkedListStringNode.getValue()).toBe('test'); // Check the value
		expect(typeof linkedListStringNode.getValue()).toBe('string'); // Check the value type
		expect(linkedListStringNode.getNext()).toBe(null); // Check the value type
	});
})