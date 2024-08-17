import LinkedListNode from "./linked-list-node";
import linkedListIterator from "./linked-list.iterator";

class LinkedList<T> {
	[Symbol.iterator](){
		return new linkedListIterator(this.head)
	}
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
	 * The head of the linked list
	 * 
	 * @returns {(LinkedListNode<T> | null)} The head of the linked list
	 */
	public getHead():LinkedListNode<T> | null
	{
		return this.head
	}

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
	 * linkedList.get(0) // Outputs: 10
	 * linkedList.get(1) // Outputs: 20
	 * linkedList.get(2) // Outputs: 30
	 * 
	 * console.log(linkedList.size())// Outputs: 3
	 * 
	 * ```
	 */
	public append(value: T): void
	{
		const newNode = new LinkedListNode<T>(value)

		if(!this.head){
			this.head = newNode;
		}else{
			let current = this.head;
			while(current.isNext()){
				current = current.next as LinkedListNode<T>
			}
			current.setNext(newNode)
		}
		this.length++
	}

	/**
	 *
	 * Prepends a new element to the end of the linked list.
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
	 * linkedList.prepend(10)
	 * linkedList.prepend(20)
	 * linkedList.prepend(30)
	 * linkedList.get(0) // Outputs: 30
	 * linkedList.get(1) // Outputs: 20
	 * linkedList.get(2) // Outputs: 10
	 * console.log(linkedList.size())// Outputs: 3
	 *
	 * ```
	 */
	public prepend(value: T): void
	{
		const newNode = new LinkedListNode<T>(value)
		if(!this.head){
			this.head = newNode
		}else{
			const currentHead = this.head
			newNode.next = currentHead
			this.head = newNode
		}
		this.length++
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
			current = current.next as LinkedListNode<T>;
		}

		return current.getValue()
	}

	/**
	 * 
	 * Removes the first occurrence of the specified value from the linked list.
	 * 
	 * @param {T} value The Value to remove from the list
	 * @returns {boolean} `true` if the value was found and removed, or `false` if the value was not found.
	 * 
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * list.append(30);
	 * console.log(list.remove(20)); // Outputs: true
	 * console.log(list.size()); // Outputs: 2
	 * console.log(list.remove(40)); // Outputs: false
	 * ```
	 * 
	 */
	public remove(value: T): boolean
	{
		if(!this.head) return false

		if(this.head.value === value){
			this.head = this.head.next
			this.length--
			return true
		}

		let current = this.head
		while(current.next && current.next.value !== value){
			current = current.next
		}

		if(current.next){
			current.next = current.next.next
			this.length--
			return true
		}

		return false
	}

	/**
	 *
	 * Gets The number of elements in the linked list.
	 *
	 * @return {number} - The number of elements in the list
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * console.log(list.size()); // Outputs: 0
	 * list.append(10);
	 * console.log(list.size()); // Outputs: 1
	 * ```
	 */
	public size(): number
	{
		return this.length
	}

	/**
	 * Determines whether the linked list is empty
	 *
	 * @return {boolean} `true` if the list is empty, or `false` if it contains any elements.
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * console.log(list.isEmpty()); // Outputs: true
	 * list.append(10);
	 * console.log(list.isEmpty()); // Outputs: false
	 * ```
	 */
	public isEmpty(): boolean
	{
		return this.length === 0;
	}

	/**
	 *
	 * Converts the linked list to an array of its elements
	 *
	 * @returns {T[]} An array containing all elements in the linked list, in order.
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * list.append(30);
	 * console.log(list.toArray()); // 출력 결과: [10, 20, 30]
	 * ```
	 */
	public toArray(): T[]
	{
		const result: T[] = []

		let current = this.head
		while(current){
			result.push(current.value)
			current = current.next
		}
		return result
	}

	/**
	 * Initialized the linked list
	 *
	 * @example
	 * ```typescript
	 * const list = new LinkedList<number>();
	 * list.append(10)
	 * list.append(20)
	 * list.clear()
	 * console.log(list.size()) // Outputs: 0
	 * console.log(list.isEmpty()) // Outputs: true
	 * ```
	 */
	public clear(): void
	{
		this.head = null
		this.length = 0
	}

}
export default LinkedList;