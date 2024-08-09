import LinkedListNode from "./linked-list-node";

class LinkedList<T> {
	/**
	 * The first node in the linked list, or null if the list is empty
	 *
	 * @private
	 * @type {(LinkedListNode<T> | null)}
	 * @memberof LinkedList
	 */
	private head: LinkedListNode<T> | null = null;

	/**
	 * The number of elements in the linked list.
	 *
	 * @private
	 * @type {number}
	 * @memberof LinkedList
	 */
	private length: number = 0;

	/**
	 * 
	 * Appends a new element to the end of the linked list.
	 * 
	 * @remarks
	 * The time complexity of this operation is O(n), where n is the number of nodes in list, as the method may need to traverse the entire list to find and remove the node.
	 * 
	 * @public
	 * @param {T} value - The value to be added to the linked list.
	 * @returns {LinkedList<T>} The linked list instance with the new value appended.
	 * 
	 * @example
	 * ```typescript
	 * const linkedList = new LinkedList<number>();
	 * 
	 * console.log(linkedList.size())// Outputs: 0
	 * 
	 * linkedList.append(10)
	 * linkedList.append(20)
	 * linkedList.append(30)
	 * 
	 * console.log(linkedList.size())// Outputs: 3
	 * 
	 * ```
	 */
	public append(value: T): LinkedList<T>
	{
		const newNode = new LinkedListNode<T>(value)

		if(!this.head){
			this.head = newNode;
		}else{
			let current = this.head;
			while(current.isNext()){
				current = current.getNext() as LinkedListNode<T>
			}
			current.setNext(newNode)
		}
		this.length++
		return this
	}

	/**
	 * 
	 * Retrievers the value at the speified index in the linked list.
	 * 
	 * @param {number} index The Zero-based index of the element to retrieve
	 * @returns {(T | null)} The value at the specified index, or `null` if the index is out of bounds.
	 * 
	 * @throws {RangeError} Throws an error if the index is negative.
	 * 
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * console.log(list.get(1)); // Outputs: 20
	 * console.log(list.get(5)); // Outputs: null
	 */
	public get(index: number): T | null 
	{
		if(index < 0){
			throw new RangeError("index out of bounds")
		}
		if(index >= this.length || this.head === null){
			return null
		}

		let current: LinkedListNode<T> = this.head
		for(let i = 0; i < index; i++){
			current = current.getNext() as LinkedListNode<T>;
		}

		return current.getValue()
	}

}
export default LinkedList;