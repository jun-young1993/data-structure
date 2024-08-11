import {StackInterface} from "./stack.interface";
import {LinkedList} from "../linked-list";

/**
 * Represents a stack implemented using a linked list.
 *
 * A node contains a value and a reference to the next node in the list.
 *
 * @template {T} T The type of value stored in the node.
 */
class Stack<T> implements StackInterface<T>{
    /**
     * The internal linked list that holds the stack elements.
     *
     * @type {LinkedList<T>}
     * @private
     */
    private list: LinkedList<T> = new LinkedList<T>()

    /**
     * Removes all elements from the stack.
     *
     * This method clears the stack, resetting its size to zero
     * @example
     * ```typescript
     * const stack = new Stack<number>()
     * stack.push(10)
     * stack.push(20)
     * console.log(stack.size()) // Outputs: 2
     * stack.clear()
     * console.log(stack.size()) // Outputs: 0
     * ```
     */
    public clear(): void {
        this.list.clear()
    }

    /**
     * Checks whether the queue is empty
     *
     * @public
     * @return {boolean} `true` if the queue is empty, or `false` if it contains elements.
     * @example
     * ```typescript
     * const stack = new Stack<number>()
     * console.log(stack.isEmpty()) // Outputs: true
     * stack.push(10)
     * stack.push(20)
     * console.log(stack.isEmpty()) // Outputs: false
     * stack.clear()
     * console.log(stack.isEmpty()) // Outputs: true
     * ```
     */
    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    /**
     * Returns the top element of the stack without removing it.
     * @return {T | null} The element at the top of the stack, or `null` if the stack is empty.
     * @example
     * ```typescript
     * const stack = new LinkedListStack<number>();
     * stack.push(10);
     * stack.push(20);
     * console.log(stack.peek()); // Outputs: 20
     * ```
     */
    public peek(): T | null {
        return this.list.get(0)
    }

    /**
     * Removes and returns the top element of the stack.
     *
     * @return {T | null} The element removed from the top of the stack, or null if the stack is empty
     * @example
     * ```typescript
     * const stack = new LinkedListStack<number>();
     * stack.push(10);
     * console.log(stack.pop()); // Outputs: 10
     * console.log(stack.pop()); // Outputs: undefined
     * ```
     */
    public pop(): T | null {
        const top = this.peek()
        if(top){
            this.list.remove(top)
        }
        return top;
    }

    /**
     * Pushed a new element onto the top of the stack
     *
     * @param {T} item The element to push onto the stack
     *
     */
    public push(item: T): void {
        this.list.prepend(item)
    }

    /**
     * Returns the number of elements in the stack.
     *
     * @public
     * @return {number} The number of elements in the stack.
     * @example
     * ```typescript
     * const stack = new Queue<number>()
     * stack.push(10)
     * stack.push(20)
     * console.log(stack.size()) // Outputs: 2
     * ```
     */
    public size(): number {
        return this.list.size();
    }

}

export default Stack