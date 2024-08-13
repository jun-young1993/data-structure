import DoublyLinkedListNode from "./doubly-linked-list-node";

/**
 * Implementation of Dobly Linked List.
 * 
 * @template {T} - The type of the elemetns in the linked list
 * @example
 * ```typescript
 * const list = new DoublyLinkedList<number>
 * list.append(10)
 * list.prepend(5)
 * console.log(list.size()) //Outputs: 2
 * console.log(list.toArray()) // Outputs: [5,10]
 * ```
 */
class DoublyLinkedList<T>{
	/**
	 * The first node in the linked list, or null if the list is empty
	 *
	 * @private
	 * @type {(DoublyLinkedListNode<T> | null)}
	 * @memberof DoublyLinkedList
	 */
	private head: DoublyLinkedListNode<T> | null = null

	/**
	 * The last node in the linked list, or null if the list is empty
	 *
	 * @private
	 * @type {(DoublyLinkedListNode<T> | null)}
	 * @memberof DoublyLinkedList
	 */
	private tail: DoublyLinkedListNode<T> | null = null
	
	/**
	 * The number of elements in the linked list
	 *
	 * @private
	 * @type {number}
	 * @memberof DoublyLinkedList
	 */
	private length: number = 0

	/**
	 * The head of the linked list
	 * @returns {(DoublyLinkedListNode<T> | null)} 
	 */
	public getHead(): DoublyLinkedListNode<T> | null
	{
		return this.head
	}

	/**
	 * The tail of the linked list
	 * @returns {DoublyLinkedListNode<T> | null}
	 */
	public getTail(): DoublyLinkedListNode<T> | null
	{
		return this.tail
	}
	
	/**
	 * Appends a new element to the end of the linked list
	 * 
	 * @public
	 * @param {T} value The value to be added to the linked list
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>()
	 * list.append(10)
	 * console.log(list.toArray()) // Outputs: [10]
	 * ```
	 */
	public append(value: T): void {
	    const newNode = new DoublyLinkedListNode<T>(value);
		
	    if (!this.tail) {
		this.head = newNode;
		this.tail = newNode;
	    } else {
		this.tail.setNext(newNode);
		newNode.setPrev(this.tail);
		this.tail = newNode;
	    }
    
	    this.length++;
	}
	
	/**
	 * Prepends a new element to the start of the linked list
	 * @param value 
	 */
	public prepend(value: T): void {
	    const newNode = new DoublyLinkedListNode<T>(value);
    
	    if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	    } else {
		this.head.setPrev(newNode);
		newNode.setNext(this.head);
		this.head = newNode;
	    }
    
	    this.length++;
	}
	
	/**
	 * Removes the first occurrence of the specified value from the linked list.
	 * 
	 * @public
	 * @param {T} value The value to be removed from the list 
	 * @returns {boolean} `true` if the value was found and removed, `false` oherwise
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>();
	 * list.append(10);
	 * list.remove(10);
	 * console.log(list.size()); // Outputs: 0
	 * ```
	 */
	public remove(value: T): boolean {
	    if (!this.head) return false;
    
	    let current:DoublyLinkedListNode<T> | null = this.head
    
	    while (current) {
		if (current.value === value) {
		    if (current.prev && current.next) {
			current.prev.setNext(current.next);
		    } else {
			this.head = current.next
		    }
    
		    if (current.next && current.prev) {
			current.next.setPrev(current.prev);
		    } else {
			this.tail = current.prev
		    }
    
		    this.length--;
		    return true;
		}
		
		current = current.next
	    }
    
	    return false;
	}

	/**
	 * Retrives the value at the specified index in the linked list.
	 * 
	 * @param {number} index The zero-based index of the element to retrieve
	 * @returns {(T | null)} The value at the specified index, or `null` if the index is out of bounds.
	 * @throws {RangeError} Throws an error if the index is negative.
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * console.log(list.get(1)); // Outputs: 20
	 * console.log(list.get(5)); // Outputs: null
	 * ```
	 */
	public get(index:number): T | null
	{
		if(index < 0){
			throw new RangeError("index out of bounds")
		}

		if(index >= this.size() || this.head === null){
			return null
		}

		let current: DoublyLinkedListNode<T> = this.head;
		for(let i = 0; i < index; i++){
			current = current.next as DoublyLinkedListNode<T>;
		}

		return current.getValue()

	}

	/**
	 * Returns the number of elements in the linked list.
	 * 
	 * @public
	 * @returns {number} the number of elements in the list
	 * 
	 * @example
	 * ```
	 * const list = new DoublyLinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * console.log(list.size()); // Outputs: 2
	 * ```
	 */
	public size(): number
	{
		return this.length
	}

	/**
	 * Checks whether the linked list is empty.
	 * 
	 * @public
	 * @returns {boolean} `true` if the list is empty, `false` otherwise
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>();
	 * console.log(list.isEmpty()); // Outputs: true
	 * list.append(10);
	 * console.log(list.isEmpty()); // Outputs: false
	 * ```
	 */
	public isEmpty(): boolean
	{
		return this.size() === 0
	}

	/**
	 *
	 * Converts the linked list to an array of its elements
	 *
	 * @returns {T[]} An array containing all elements in the linked list, in order.
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>();
	 * list.append(10);
	 * list.append(20);
	 * list.append(30);
	 * console.log(list.toArray()); // 출력 결과: [10, 20, 30]
	 * ```
	 */
	public toArray(): T[] 
	{
		const result: T[]  = []
		let current = this.head
		while(current){
			result.push(current.getValue())
			current = current.next
		}

		return result
	}

	
	/**
	 * Initialized the linked list
	 *
	 * @example
	 * ```typescript
	 * const list = new DoublyLinkedList<number>();
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
		this.tail = null
		this.length = 0
	}
    }
    
    export default DoublyLinkedList;