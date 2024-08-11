import { LinkedList } from "../../src";

describe('LinkedList', () => {
	let linkedList: LinkedList<number>
	

	beforeEach(() => {
		linkedList = new LinkedList()
	})

	test('should start empty', () => {
		expect(linkedList.isEmpty()).toBe(true)
		expect(linkedList.size()).toBe(0)
	})

	test('should append items to the list',() => {
		linkedList.append(10)
		linkedList.append(20)
		expect(linkedList.size()).toBe(2)
		expect(linkedList.get(0)).toBe(10)
		expect(linkedList.get(1)).toBe(20)
	})

	test("should return `null` or `RangeError` for invalid index",() => {
		expect(() => linkedList.get(-1)).toThrow(RangeError)
		expect(linkedList.get(0)).toBe(null)
		linkedList.append(10)
		expect(linkedList.get(1)).toBe(null)
		linkedList.append(20)
		expect(linkedList.get(2)).toBe(null)
	})

	test("should remove items from the list",() => {
		linkedList.append(10)
		linkedList.append(20)
		linkedList.append(30)
		expect(linkedList.remove(20)).toBe(true)
		expect(linkedList.size()).toBe(2)
		expect(linkedList.get(0)).toBe(10)
		expect(linkedList.get(1)).toBe(30)
	})

	test("should handle removing the head of the list", () => {
		linkedList.append(10)
		expect(linkedList.remove(10)).toBe(true)
		expect(linkedList.size()).toBe(0)
		expect(linkedList.isEmpty()).toBe(true)
		linkedList.append(10)
		linkedList.append(20)
		linkedList.append(30)
		expect(linkedList.remove(10)).toBe(true)
		expect(linkedList.size()).toBe(2)
		expect(linkedList.get(0)).toBe(20)
		expect(linkedList.get(1)).toBe(30)
		expect(linkedList.get(2)).toBe(null)
	})

	test("should return false when removing non-existent item", () => {
		linkedList.append(10)
		expect(linkedList.remove(20)).toBe(false)
	})

	test("should convert list to array", () => {
		linkedList.append(10)
		expect(linkedList.toArray()).toEqual([10])
		linkedList.append(20)
		expect(linkedList.toArray()).toEqual([10,20])
		linkedList.append(30)
		expect(linkedList.toArray()).toEqual([10,20,30])
		linkedList.remove(20)
		expect(linkedList.toArray()).toEqual([10,30])
	})

	test("should handle removing the only item in the list", () => {
		linkedList.append(10)
		expect(linkedList.remove(10)).toBe(true)
		expect(linkedList.size()).toBe(0)
		expect(linkedList.isEmpty()).toBe(true)
	})

	test("should append items and maintain order",() => {
		linkedList.append(1)
		linkedList.append(2)
		linkedList.append(3)
		expect(linkedList.toArray()).toEqual([1,2,3])
	})

	test("should get items by index correctly",() => {
		linkedList.append(10)
		linkedList.append(20)
		linkedList.append(30)
		expect(linkedList.get(0)).toBe(10)
		expect(linkedList.get(1)).toBe(20)
		expect(linkedList.get(2)).toBe(30)
		expect(linkedList.get(3)).toBe(null)
	})


})