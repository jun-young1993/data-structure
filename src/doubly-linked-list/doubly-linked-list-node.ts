import { DoublyLinkedListNodeInterface } from "./doubly-linked-list.interface";

/**
 * Represents a node in a doubly linked list, extending a singly linked list node.
 * 
 * @template T - The type of the value stored in the node
 */
class DoublyLinkedListNode<T> implements DoublyLinkedListNodeInterface<T> {
    /**
     * the value stored in the node
     *
     * @private
     * @type {T}
     * @memberof DoublyLinkedListNode
     */
    private value: T

    /**
     * The reference to the previous node in the doubly linked list
     *
     * 
     * @private
     * @type {(DoublyLinkedListNodeInterface<T> | null)}
     */
    private prev: DoublyLinkedListNodeInterface<T> | null = null;

    /**
     * The reference to the next node in the doubly linked list
     *
     * @private
     * @type {(DoublyLinkedListNodeInterface<T> | null)}
     * @memberof DoublyLinkedListNode
     */
    private next: DoublyLinkedListNodeInterface<T> | null = null;

    /**
     * Creates an instance of a DoublyLinkedListNode
     * 
     * @param {T} value - The value to be stored in the node
     */
    constructor(value: T) {
        this.value = value
    }

    /**
     * Returns the value stored in the object
     * @public
     * @returns {T} The value stored in the object
     * @example
     * ```typescript
     * const doublyLinkedListNode = new DoublyLinkedListNode<number>(10)
     * console.log(doublyLinkedListNode.getValue()) / Outputs: 10
     * ```
     */
    public getValue(): T
    {
        return this.value
    }

    /**
     * Returns the previous node in the doubly linked list.
     * 
     * @public
     * @returns {(DoublyLinkedListNodeInterface<T> | null)} The previous node or `null` if there is none
     */
    public getPrev(): DoublyLinkedListNodeInterface<T> | null {
        return this.prev
    }

    /**
     * Returns the Next node inthe doubly linked list
     * 
     * @public
     * @returns {(DoublyLinkedListNodeInterface<T> | null)} The previous node or `null` if there is none
     */
    public getNext(): DoublyLinkedListNodeInterface<T> | null {
        return this.next
    }

    /**
     * Checks if there is a previous node.
     * 
     * @public
     * @returns {boolean} `true` if there is a previous node, `false` otherwise
     */
    public isPrev(): boolean {
        return this.getPrev() !== null;
    }

    /**
     * Checks if there is a next node.
     * 
     * @public
     * @returns {boolean} `true` if there is a next node, `false` otherwise
     */
    public isNext(): boolean {
        return this.getNext() !== null
    }

    /**
     * Sets the previous node in the doubly linked list.
     * 
     * @public
     * @param {DoublyLinkedListNodeInterface<T>} node - The node to set as previous
     * @returns {DoublyLinkedListNodeInterface<T>} The newly set previous node
     */
    public setPrev(node: DoublyLinkedListNodeInterface<T>): DoublyLinkedListNodeInterface<T> {
        this.prev = node;
        return this.prev;
    }

    /**
     * Sets the next node in the doubly linked list.
     * 
     * @public
     * @param {DoublyLinkedListNodeInterface<T>} node - The node to set as next
     * @returns {DoublyLinkedListNodeInterface<T>} The newly set next node
     */
    public setNext(node: DoublyLinkedListNodeInterface<T>): DoublyLinkedListNodeInterface<T> {
        this.next = node
        return this.next
    }
}

export default DoublyLinkedListNode;
