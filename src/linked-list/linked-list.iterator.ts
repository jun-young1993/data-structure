import LinkedListNode from "./linked-list-node";


class linkedListIterator<T> {
    private currentNode: LinkedListNode<T> | null
    constructor(head: LinkedListNode<T> | null) {
        this.currentNode = head
    }
    next(): { value: T | undefined; done: boolean } {
        if(this.currentNode){
            const value = this.currentNode.value
            this.currentNode = this.currentNode.next
            return { value, done: false}
        }else{
            return {value: undefined, done: true}
        }
    }
}

export default linkedListIterator