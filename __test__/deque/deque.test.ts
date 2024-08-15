import {Deque} from "../../src";

describe("Deque", () => {
    let deque: Deque<number>

    beforeEach(() => {
        deque = new Deque<number>()
    })

    test("should start empty", () => {
        expect(deque.size()).toBe(0)
        expect(deque.isEmpty()).toBe(true)
    })

    test("should add elements to the front", () => {
        deque.addFront(10)
        expect(deque.size()).toBe(1)
        expect(deque.peekFront()).toBe(10)
        expect(deque.peekBack()).toBe(10)

        deque.addFront(20)
        expect(deque.size()).toBe(2)
        expect(deque.peekFront()).toBe(20)
        expect(deque.peekBack()).toBe(10)
    })

    test("should add elements to the back", () => {
        deque.addBack(10)
        expect(deque.size()).toBe(1)
        expect(deque.peekFront()).toBe(10)
        expect(deque.peekBack()).toBe(10)

        deque.addBack(20)
        expect(deque.size()).toBe(2)
        expect(deque.peekFront()).toBe(10)
        expect(deque.peekBack()).toBe(20)
    })

    test("should remove elements from the front", () => {
        deque.addBack(10)
        deque.addBack(20)
        deque.addBack(30)

        expect(deque.removeFront()).toBe(10)
        expect(deque.size()).toBe(2)
        expect(deque.peekFront()).toBe(20)
        expect(deque.peekBack()).toBe(30)
        expect(deque.removeFront()).toBe(20)
        expect(deque.size()).toBe(1)
        expect(deque.peekFront()).toBe(30)
        expect(deque.peekBack()).toBe(30)

        expect(deque.removeFront()).toBe(30)
        expect(deque.size()).toBe(0)
        expect(deque.isEmpty()).toBe(true)
    })

    test('should remove elements from the back', () => {
        deque.addBack(10);
        deque.addBack(20);
        deque.addBack(30);

        expect(deque.removeBack()).toBe(30);
        expect(deque.size()).toBe(2);
        expect(deque.peekFront()).toBe(10);
        expect(deque.peekBack()).toBe(20);

        expect(deque.removeBack()).toBe(20);
        expect(deque.size()).toBe(1);
        expect(deque.peekFront()).toBe(10);
        expect(deque.peekBack()).toBe(10);

        expect(deque.removeBack()).toBe(10);
        expect(deque.size()).toBe(0);
        expect(deque.isEmpty()).toBe(true);
    });

    test('should peek front and back elements without removing them', () => {
        deque.addBack(10);
        deque.addBack(20);

        expect(deque.peekFront()).toBe(10);
        expect(deque.peekBack()).toBe(20);

        deque.addFront(5);
        expect(deque.peekFront()).toBe(5);
        expect(deque.peekBack()).toBe(20);
    });

    test('should correctly handle empty deque', () => {
        expect(deque.removeFront()).toBeNull();
        expect(deque.removeBack()).toBeNull();
        expect(deque.peekFront()).toBeNull();
        expect(deque.peekBack()).toBeNull();
    });

})