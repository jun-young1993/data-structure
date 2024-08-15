import { DoublyLinkedList } from "../../src"

describe("DoublyLinkedList", () => {
    let doublyLinkedList: DoublyLinkedList<number>;

    beforeEach(() => {
        doublyLinkedList = new DoublyLinkedList<number>();
    });

    test("should start empty", () => {
        expect(doublyLinkedList.size()).toBe(0);
        expect(doublyLinkedList.isEmpty()).toBe(true);
    });

    test("should append elements to the list", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        expect(doublyLinkedList.size()).toBe(2);
        expect(doublyLinkedList.isEmpty()).toBe(false);
        expect(doublyLinkedList.toArray()).toEqual([10, 20]);
    });

    test("should prepend elements to the list", () => {
        doublyLinkedList.prepend(10);
        doublyLinkedList.prepend(5);
        expect(doublyLinkedList.size()).toBe(2);
        expect(doublyLinkedList.isEmpty()).toBe(false);
        expect(doublyLinkedList.toArray()).toEqual([5, 10]);
    });

    test("should correctly navigate through next and previous nodes in the list",() => {
        doublyLinkedList.append(10)
        expect(doublyLinkedList.toArray()).toEqual([10])
        doublyLinkedList.prepend(5)
        expect(doublyLinkedList.toArray()).toEqual([5,10])
        doublyLinkedList.append(15)
        expect(doublyLinkedList.toArray()).toEqual([5,10,15])
        expect(doublyLinkedList.getHead()?.getNext()?.getValue()).toBe(10)
        expect(doublyLinkedList.getHead()?.getNext()?.getPrev()?.getValue()).toBe(5)
        expect(doublyLinkedList.getHead()?.getNext()?.getPrev()?.getNext()?.getNext()?.getValue()).toBe(15)
    })

    test("should remove elements from the list", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        doublyLinkedList.append(30);

        expect(doublyLinkedList.remove(20)).toBe(true);
        expect(doublyLinkedList.size()).toBe(2);
        expect(doublyLinkedList.toArray()).toEqual([10, 30]);

        expect(doublyLinkedList.remove(100)).toBe(false);
        expect(doublyLinkedList.size()).toBe(2);
        expect(doublyLinkedList.toArray()).toEqual([10, 30]);
    });

    test("should remove elements from the list2", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        doublyLinkedList.append(30);

        expect(doublyLinkedList.remove(10)).toBe(true);
        expect(doublyLinkedList.toArray()).toEqual([20, 30]);

        expect(doublyLinkedList.remove(20)).toBe(true);
        expect(doublyLinkedList.toArray()).toEqual([30]);

        expect(doublyLinkedList.remove(30)).toBe(true);
        expect(doublyLinkedList.toArray()).toEqual([]);
    });

    test("should retrieve elements by index", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        doublyLinkedList.append(30);

        expect(doublyLinkedList.get(0)).toBe(10);
        expect(doublyLinkedList.get(1)).toBe(20);
        expect(doublyLinkedList.get(2)).toBe(30);
        expect(doublyLinkedList.get(3)).toBeNull(); // 범위를 벗어난 인덱스에 대해 null을 반환
        expect(() => doublyLinkedList.get(-1)).toThrow(RangeError); // 음수 인덱스에 대한 에러 발생 확인
    });

    test("should clear the list", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        doublyLinkedList.clear();
        expect(doublyLinkedList.size()).toBe(0);
        expect(doublyLinkedList.isEmpty()).toBe(true);
        expect(doublyLinkedList.toArray()).toEqual([]);
    });

    test("should convert the list to an array", () => {
        doublyLinkedList.append(10);
        doublyLinkedList.append(20);
        doublyLinkedList.append(30);
        expect(doublyLinkedList.toArray()).toEqual([10, 20, 30]);
    });
});
