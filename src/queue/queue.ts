import {LinkedList} from "../linked-list";

/**
 * Represents a Queue data structure using a linked list
 *
 * @template T The type of elements stored in the queue.
 */
class Queue<T> {
    /**
     * Internal linked list to store queue elements
     *
     * @type {LinkedList<T>}
     * @private
     */
    private list: LinkedList<T> = new LinkedList<T>()

    /**
     * Enqueue a new element at the end of the queue
     *
     * @public
     *
     * @param {T} item The Element to add to the queue.
     *
     * ```typescript
     * const queue = new Queue<number>()
     * queue.enqueue(10)
     * queue.enqueue(20)
     * console.log(queue.size()) // Outputs: 2
     * ```
     */
    public enqueue(item: T): void
    {
        this.list.append(item)
    }


    /**
     * Dequeues the element at the front of the queue.
     *
     * @public
     *
     * @return {T | null} The element removed from the front of the queue, or `null` if the queue is empty.
     *
     * @example
     * ```typescript
     * const queue = new Queue<number>()
     * queue.enqueue(10)
     * queue.enqueue(20)
     * console.log(queue.dequeue()) // Outputs: 10
     * console.log(queue.dequeue()) // Outputs: 20
     * console.log(queue.dequeue()) // Outputs: null
     * ```
     */
    public dequeue(): T | null
    {
        const head = this.peek()
        if(head){
            this.list.remove(head)
        }
        return head
    }

    /**
     * Returns the element at the front of the queue without removing it.
     *
     * @public
     *
     * @return {T | null}
     *
     * @example
     * ```typescript
     * const queue = new Queue<number>();
     * queue.enqueue(10);
     * queue.enqueue(20);
     * console.log(queue.peek()); // Outputs: 10
     * console.log(queue.size()); // Outputs: 2
     * ```
     */
    public peek(): T | null
    {
        return this.list.get(0)
    }

    /**
     * Checks whether the queue is empty.
     *
     * @public
     * @return {boolean} `true` if the queue is empty, or `false` if it contains elements.
     * @example
     * ```typescript
     * const queue = new Queue<number>();
     * console.log(queue.isEmpty()); // Outputs: true
     * queue.enqueue(10);
     * console.log(queue.isEmpty()); // Outputs: false
     */
    public isEmpty(): boolean
    {
        return this.list.isEmpty()
    }

    /**
     * Returns the number of elements in the queue.
     *
     * @public
     * @return {number} The number of elements in the queue.
     * @example
     * ```typescript
     * const queue = new Queue<number>();
     * queue.enqueue(10);
     * queue.enqueue(20);
     * console.log(queue.size()); // Outputs: 2
     * ```
     */
    public size(): number
    {
        return this.list.size()
    }

    /**
     * Removes all elements from the queue.
     *
     * This method clears the queue, removing all elements and resetting its size to zero
     */
    public clear(): void
    {
        while(!this.isEmpty()){
            this.dequeue()
        }
    }
}

export default Queue