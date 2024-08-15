import {DoublyLinkedList} from "../doubly-linked-list"

/**
 * Implementation of a Deque (Double-ended Queue)
 * @template T - The type of elements in the deque
 * @example
 * ```typescript
 * const deque = new Deque<number>()
 * deque.addFront(10)
 * deque.addBack(20)
 * deque.size() //Outputs:2
 * deque.peekFront() // Outputs: 10
 * deque.peekBack() // Outputs: 20
 * ```
 */
class Deque<T> {
    private items: DoublyLinkedList<T>

    constructor() {
        this.items = new DoublyLinkedList<T>()
    }

    /**
     * Adds an element to the front of the deque.
     *
     * @param {T} value = The value to be added to the front
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addFront(10)
     * deque.size() // Outputs: 1
     * deque.peekFront() // Outputs: 10
     * deque.peekBack() // Outputs: 10
     * ```
     */
    public addFront(value: T): void
    {
        this.items.prepend(value)
    }

    /**
     * Adds an element to the back of the deque.
     *
     * @param {T} value - The value to be added to the back
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addBack(10)
     * deque.size() // Outputs: 1
     * deque.peekFront() // Outputs: 10
     * deque.peekBack() // Outputs: 10
     * ```
     */
    public addBack(value: T): void
    {
        this.items.append(value)
    }

    /**
     * Removes and returns the element from the front of the deque.
     *
     * @return {T | null} The element at the front, or `null` if the deque is empty
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addBack(10)
     * deque.addBack(20)
     * deque.removeFront() // Outputs: 10
     * deque.size() // Outputs: 1
     * deque.removeFront() // Outputs: 20
     * deque.size() // Outputs: 0
     * deque.isEmpty() // Outputs: true
     * deque.removeFront() // Outputs: null
     * ```
     */
    public removeFront(): T | null
    {
        if(this.isEmpty()) return null
        const front = this.peekFront()

        if(front){
            this.items.remove(front)
        }

        return front
    }

    /**
     * Removes and returns the element from the back of the deque.
     * @return {T | null} The element at the back, or `null` if the deque
     * @public
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addBack(10)
     * deque.addBack(20)
     * deque.removeBack() // Outputs: 10
     * deque.size() // Outputs: 1
     * deque.removeBack() // Outputs: 20
     * deque.size() // Outputs: 0
     * deque.isEmpty() // Outputs: true
     * deque.removeBack() // Outputs: null
     * ```
     */
    public removeBack(): T | null
    {
        if(this.isEmpty()) return null
        const back = this.peekBack()
        if(back){
            this.items.remove(back)
        }
        return back
    }

    /**
     * Returns the element at the back of the deque without removing it
     * @return {T | null} The element at the back, or `null` if the deque is empty
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addBack(10)
     * deque.peekBack() // Outputs: 10
     * deque.addBack(20)
     * deque.peekBack() // Outputs: 20
     * ```
     */
    public peekBack(): T | null
    {
        if(this.isEmpty()) return null
        return this.items.get(this.size() - 1)
    }

    /**
     * Returns the element at the front of the deque without removing it.
     *
     * @return {T | null} The element at the front, or `null` if the deque is empty
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.addFront(10)
     * deque.peekFront() // Outputs: 10
     * deque.addFront(20)
     * deque.peekFront() // Outputs: 20
     * ```
     */
    public peekFront(): T | null
    {
        return this.items.get(0)
    }

    /**
     * Checks if the deque is empty.
     *
     * @return {boolean} `true` if the deque is empty, `false` otherwise
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.isEmpty() // Outputs: true
     * deque.size() // Outputs: 0
     * deque.addBack(10)
     * deque.peekFront() // Outputs: 10
     * deque.isEmpty() // Outputs: false
     * deque.size() // Outputs: 1
     * deque.peekBack() // Outputs: 10
     * deque.isEmpty() // Outputs: false
     * deque.size() // Outputs: 2
     * ```
     */
    public isEmpty(): boolean
    {
        return this.items.isEmpty()
    }

    /**
     * number of elements in the deque
     *
     * @return {number} number of elements in the deque
     * @public
     * @example
     * ```typescript
     * const deque = new Deque<number>()
     * deque.size() // Outputs: 0
     * deque.addBack(10)
     * deque.size() // Outputs: 1
     * deque.peekBack() // Outputs: 10
     * deque.size() // Outputs: 2
     * ```
     */
    public size(): number
    {
        return this.items.size()
    }

    /**
     *
     * @return {T[]}
     */
    public toArray(): T[]
    {
        return this.items.toArray()
    }

}

export default Deque