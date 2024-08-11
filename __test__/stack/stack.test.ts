import {Stack} from "../../src";


describe("Stack", () => {
    let stack: Stack<number>
    beforeEach(() => {
        stack = new Stack<number>()
    })

    test("should start empty", () => {
        expect(stack.isEmpty()).toBe(true)
        expect(stack.size()).toBe(0)
    })

    test("should push items onto the stack", () => {
        stack.push(10)
        stack.push(20)
        stack.push(30)
        expect(stack.size()).toBe(3)
        expect(stack.isEmpty()).toBe(false)
        expect(stack.peek()).toBe(30)
    })

    test("should pop items from the stack", () => {
        stack.push(10)
        stack.push(20)
        stack.push(30)
        expect(stack.pop()).toBe(30)
        expect(stack.size()).toBe(2)
        expect(stack.isEmpty()).toBe(false)

        expect(stack.pop()).toBe(20)
        expect(stack.size()).toBe(1)
        expect(stack.isEmpty()).toBe(false)

        expect(stack.pop()).toBe(10)
        expect(stack.size()).toBe(0)
        expect(stack.isEmpty()).toBe(true)
    })

    test("should peek at the top item without popping it",() => {
        stack.push(10)
        stack.push(20)

        expect(stack.peek()).toBe(20)
        expect(stack.size()).toBe(2)
    })

    test("should return null when popping from an empty stack", () => {
        expect(stack.peek()).toBeNull()
        expect(stack.pop()).toBeNull()
    })

    test("should clear the stack", () => {
        stack.push(10)
        stack.push(20)
        stack.push(30)
        expect(stack.size()).toBe(3)
        expect(stack.isEmpty()).toBe(false)
        expect(stack.peek()).toBe(30)
        stack.clear()
        expect(stack.size()).toBe(0)
        expect(stack.isEmpty()).toBe(true)
        expect(stack.peek()).toBeNull()
    })

    test("should confirm the stack is empty after popping all items", () => {
        stack.push(10)
        stack.push(20)
        stack.pop()
        stack.pop()
        expect(stack.isEmpty()).toBe(true)
        expect(stack.size()).toBe(0)
        expect(stack.peek()).toBeNull()
        expect(stack.pop()).toBeNull()
    })
})