import { LinkedListInterface, LinkedListNodeInterface} from "linked-list/linked-list.interface"


/**
 * Interface for a node in a doubly linked list, extending the singly linked list node interface
 */
export interface DoublyLinkedListNodeInterface<T>{
	getValue: () => T
	getPrev: () => DoublyLinkedListNodeInterface<T> | null
	getNext: () => DoublyLinkedListNodeInterface<T> | null
	isPrev: () => boolean
	isNext: () => boolean
	setPrev: (node: DoublyLinkedListNodeInterface<T>) => DoublyLinkedListNodeInterface<T>;
	setNext: (node: DoublyLinkedListNodeInterface<T>) => DoublyLinkedListNodeInterface<T>;
}

/**
 * Interface for a doubly linked list
 */
export interface DoublyLinkedListInterface<T>{
	
}