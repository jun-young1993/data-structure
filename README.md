# data-structure

# [BLOG DOCS](https://juny.blog/repository-markdown-viewer/data-structure/docs/index/README.md) Or [GithubDocs](https://github.com/jun-young1993/data-structure/tree/main/docs)
# [TEST CODE](https://github.com/jun-young1993/data-structure/tree/main/__test__)

![npm](https://img.shields.io/npm/dm/node-data-structure)
![npm](https://img.shields.io/npm/dt/node-data-structure)
![npm](https://img.shields.io/npm/dw/node-data-structure)
![npm](https://img.shields.io/npm/v/node-data-structure)
![npm (tag)](https://img.shields.io/npm/v/node-data-structure/latest)
![NPM](https://img.shields.io/npm/l/node-data-structure)
![npm package size](https://img.shields.io/bundlephobia/min/node-data-structure)
![npm package size (gzip)](https://img.shields.io/bundlephobia/minzip/node-data-structure)
![ESLint](https://img.shields.io/badge/code%20style-eslint-brightgreen)
![GitHub contributors](https://img.shields.io/github/contributors/jun-young1993/data-structure)  
![GitHub stars](https://img.shields.io/github/stars/jun-young1993/data-structure)  
![GitHub issues](https://img.shields.io/github/issues/jun-young1993/data-structure)  
![GitHub last commit](https://img.shields.io/github/last-commit/jun-young1993/data-structure)
![GitHub top language](https://img.shields.io/github/languages/top/jun-young1993/data-structure)  
![GitHub language count](https://img.shields.io/github/languages/count/jun-young1993/data-structure)


# Features
## Primitive Data Structures
- [x] Linked List
```typescript
	const linkedList = new LinkedList<number>()
	linkedList.append(10)
	linkedList.toArray() //Outputs: [10]
	linkedList.prepend(5)
	linkedList.toArray() // Outputs: [5,10]
	linkedList.getHead()?.getValue() // Outputs: 5
	linkedList.getHead()?.getNext()?.getValue() //Outputs: 10
```
- [x] Doubly Linked List
```typescript
	const doublyLinkedList = new DoublyLinkedList<number>()
	doublyLinkedList.append(10)
	doublyLinkedList.toArray() //Outputs: [10]
	doublyLinkedList.prepend(5)
	doublyLinkedList.toArray() //Outputs: [5,10]
	doublyLinkedList.append(15)
	doublyLinkedList.toArray() //Outputs: [5,10,15]
	doublyLinkedList.getHead()?.getNext()?.getValue() //Outputs: 10
	doublyLinkedList.getHead()?.getNext()?.getPrev()?.getValue() //Outputs: 5
	doublyLinkedList.getHead()?.getNext()?.getPrev()?.getNext()?.getNext()?.getValue() //OutPuts: 15
```
- [x] Stack
```typescript
	const stack = new Stack<number>()
        stack.push(10)
        stack.push(20)
        stack.push(30)
        stack.pop() //Outputs: 30
        stack.size() //Outputs: 2
        stack.isEmpty() //Outputs: true
        stack.pop() //Outputs: 20
        stack.size() //Outputs: 1
        stack.isEmpty() //Outputs: true
        stack.pop() //Outputs: 10
        stack.size() //Outputs: 0
        stack.isEmpty() //Outtpus: true
```
- [x] Queue
```typescript
	queue.enqueue(10)
	queue.enqueue(20)
	queue.dequeue() //Outputs: 10
	queue.size() //Outputs: 1
	queue.dequeue() //Outputs: 20
	queue.size() //Outputs: 0
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
- [x] Deque, Double-ended Queue
```typescript
    const deque = new Deque<number>()
    deque.addFront(10)
    deque.addBack(20)
    console.log(deque.size()) //Outputs:2
    console.log(deque.peekFront()) // Outputs: 10
    console.log(deque.peekBack()) // Outputs: 20
```
- [ ] Linear List
- [ ] Circular Queue



# Versions
## 1.6.9
- Deque
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