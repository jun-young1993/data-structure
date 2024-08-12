import { LinkedListNodeInterface } from "./linked-list.interface";

/**
 * 
 * Represents a node in a linked list
 * 
 * @template T - The type of the value stored in the node
 * @example
 * ```typescript
 * 	
 * 	const linkedListNode =new LinkedListNode<number>(1);
 * 	
 * ```
 */
class LinkedListNode<T> implements LinkedListNodeInterface<T>{
	/**
	 * the value stored in the node
	 *
	 * @public
	 * @type {T}
	 * @memberof LinkedListNode
	 */
	public value: T

	/**
	 * the reference to the next node in the linked list
	 *
	 * @public
	 * @type {(LinkedListNode<T> | null)}
	 * @memberof LinkedListNode
	 */
	public next: LinkedListNode<T> | null = null;

	/**
	 * Creates an instance of a Node
	 * 
	 * @param value 
	 */
	constructor(value: T){
		this.value = value;
	}

	/**
	 * Returns the value stored in the object.
	 * 
	 * @public
	 * @returns {T} The value stored in the object
	 * @example
	 * ```typescript
	 * 
	 * const linkedListNode = new LinkedListNode<number>(1)
	 * const value = linkedListNode.getValue();
	 * 
	 * console.log(value) // 1
	 * 
	 * ```
	 */
	public getValue():T
	{
		return this.value
	}

	/**
	 * Returns the next value stored in the object.
	 * 
	 * @public
	 * @returns {(LinkedListNode<T> | null)} The next value stored in the object
	 * @example
	 * ```typescript
	 * 
	 * const linkedListNode = new LinkedListNode<number>(1)
	 * const nextLinkedListNode = linkedListNode.getNext();
	 * 
	 * console.log(nextlinkedListNode) // null
	 * 
	 * ```
	 */
	public getNext(): LinkedListNode<T> | null
	{
		return this.next
	}

	/**
	 * 
	 * @returns 
	 */
	public isNext(): boolean
	{
		return this.getNext() ? true : false
	}

	/**
	 * 
	 * The next value stored in the object
	 * 
	 * @param {LinkedListNode<T>} node 
	 * @returns {(LinkedListNode<T>)} The next value stored in the object
	 * @example
	 * ```typescript
	 * const newNode = new LinkedListNode<T>(1)
	 * newNode.setNext(2)
	 * 
	 * newNode.getNext() // Outputs: 2
	 * ```
	 */
	public setNext(node: LinkedListNode<T>): LinkedListNode<T>
	{
		this.next = node
		return this.next
	}


}

export default LinkedListNode;