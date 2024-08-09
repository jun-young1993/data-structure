/**
 * Represents a node in a linked list
 * @template T - The type of the value stored in the node
 * @example
 * ```typescript
 * 	
 * 	const linkedListNode =new LinkedListNode<number>(1);
 * 	
 * ```
 */
class LinkedListNode<T>{
	/**
	 * the value stored in the node
	 *
	 * @private
	 * @type {T}
	 * @memberof LinkedListNode
	 */
	private value: T;

	/**
	 * the reference to the next node in the linked list
	 *
	 * @private
	 * @type {(LinkedListNode<T> | null)}
	 * @memberof LinkedListNode
	 */
	private next: LinkedListNode<T> | null = null;

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


}

export default LinkedListNode;