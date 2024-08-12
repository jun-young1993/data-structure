import { LinkedList } from "../linked-list";
import DoublyLinkedListNode from "./doubly-linked-list-node";
import { DoublyLinkedListInterface } from "./doubly-linked-list.interface";

class DoublyLinkedList<T> extends LinkedList<T> implements DoublyLinkedListInterface<T> {
	private tail: DoublyLinkedListNode<T> | null = null
	private head: DoublyLinkedListNode<T> | null = null
	private length: number = 0
	
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
    
	public prepend(value: T): void {
	    const newNode = new DoublyLinkedListNode<T>(value);
    
	    if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	    } else {
		this.head.setPrev(newNode);
		newNode.setNext(this.head as DoublyLinkedListNode<T>);
		this.head = newNode;
	    }
    
	    this.length++;
	}
    
	public remove(value: T): boolean {
	    if (!this.head) return false;
    
	    let current = this.head as DoublyLinkedListNode<T>;
    
	    while (current) {
		if (current.getValue() === value) {
		    if (current.getPrev()) {
			current.getPrev()?.setNext(current.getNext());
		    } else {
			this.head = current.getNext();
		    }
    
		    if (current.getNext()) {
			current.getNext()?.setPrev(current.getPrev());
		    } else {
			this.tail = current.getPrev() as DoublyLinkedListNode<T> | null;
		    }
    
		    this.length--;
		    return true;
		}
		current = current.getNext() as DoublyLinkedListNode<T>;
	    }
    
	    return false;
	}
    
	public clear(): void {
	    super.clear();
	    this.tail = null;
	}
    }
    
    export default DoublyLinkedList;