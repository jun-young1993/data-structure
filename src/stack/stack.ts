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

    public clear(): void {
    }

    public isEmpty(): boolean {
        return false;
    }

    public peek(): T | null {
        return null;
    }

    public pop(): T | null {
        return null;
    }

    /**
     * Pushed a new element onto the top of the stack
     *
     * @param {T} item The element to push onto the stack
     *
     */
    public push(item: T): void {
        this.list.append(item)
    }

    public size(): number {
        return 0;
    }

}