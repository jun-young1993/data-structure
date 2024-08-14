# data-structure

# [BLOG DOCS](https://juny.blog/repository-markdown-viewer/data-structure/docs/index/README.md) Or [GithubDocs](https://github.com/jun-young1993/data-structure/tree/main/docs)

# [TEST CODE](https://github.com/jun-young1993/data-structure/tree/main/__test__)

# Features
## Primitive Data Structures
- [x] Linked List
```typescript
	test("should correctly navigate through next nodes in the list",() => {
		linkedList.append(10)
		expect(linkedList.toArray()).toEqual([10])
		linkedList.prepend(5)
		expect(linkedList.toArray()).toEqual([5,10])
		expect(linkedList.getHead()?.getValue()).toBe(5)
		expect(linkedList.getHead()?.getNext()?.getValue()).toBe(10)
	})
```
- [x] Doubly Linked List
```typescript
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
```
- [x] Stack
```typescript
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
```
- [x] Queue
```typescript
    test("should dequeue items from the queue",() => {
        queue.enqueue(10)
        queue.enqueue(20)
        expect(queue.dequeue()).toBe(10)
        expect(queue.size()).toBe(1)
        expect(queue.dequeue()).toBe(20)
        expect(queue.size()).toBe(0)
    })
```
- [ ] Hash Table
## Tree
- [ ] Binary Tree
- [ ] Binary Search Tree
- [ ] AVL Tree
- [ ] Red-Black Tree
- [ ] Heap
- [ ] B-Tree
## Graph
- [ ] Undirected Graph
- [ ] Directed Graph
- [ ] Weighted Graph
- [ ] Adjacency Matrix
- [ ] Adjacency List
## Set
- [ ] Set
- [ ] Bit Vector
## Other Data Structures
- [ ] Trie
- [ ] Fibonacci heap
- [ ] Disjoint Set, Union-Find
- [ ] Deque, Double-ended Queue
```typescript

```
- [ ] Linear List
- [ ] Circular Queue



# Versions
## v1.5.6
- Doubly Linked List
---
## v1.4.4
### Added
- Stack
---
## v1.3.2
### Added
- Linked List
- Queue