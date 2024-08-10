import {Queue} from "../../src";

describe("Queue", () => {
    let queue: Queue<number>

    beforeEach(() => {
        queue = new Queue()
    })

    test("should start empty",() => {
        expect(queue.isEmpty()).toBe(true)
        expect(queue.size()).toBe(0)
    })

    test("should enqueue items to the queue", () => {
        queue.enqueue(10)
        queue.enqueue(20)
        expect(queue.size()).toBe(2)
        expect(queue.peek()).toBe(10)
    })

    test("should dequeue items from the queue",() => {
        queue.enqueue(10)
        queue.enqueue(20)
        expect(queue.dequeue()).toBe(10)
        expect(queue.size()).toBe(1)
        expect(queue.dequeue()).toBe(20)
        expect(queue.size()).toBe(0)
    })

    test("should return `null` when dequeuing from an empty queue", () => {
        expect(queue.dequeue()).toBeNull()
    })

    test("should peek at the front item without dequeuing it", () => {
        queue.enqueue(10)
        expect(queue.peek()).toBe(10)
        expect(queue.size()).toBe(1)
        expect(queue.dequeue()).toBe(10)
        expect(queue.peek()).toBeNull()
        expect(queue.isEmpty()).toBe(true)
    })

    test("should clear the queue", () => {
        queue.enqueue(10)
        queue.enqueue(20)
        queue.clear()
        expect(queue.size()).toBe(0)
        expect(queue.isEmpty()).toBe(true)
    })

    test("should confirm the queue is empty after dequeueing all items", () => {
        queue.enqueue(10)
        queue.enqueue(20)
        queue.dequeue()
        queue.dequeue()
        expect(queue.isEmpty()).toBe(true)
        expect(queue.size()).toBe(0)
    })

})