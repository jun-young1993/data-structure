[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / Queue

# Class: Queue\<T\>

Represents a Queue data structure using a linked list

## Type Parameters

• **T**

The type of elements stored in the queue.

## Constructors

### new Queue()

> **new Queue**\<`T`\>(): [`Queue`](Queue.md)\<`T`\>

#### Returns

[`Queue`](Queue.md)\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Removes all elements from the queue.

This method clears the queue, removing all elements and resetting its size to zero

#### Returns

`void`

#### Defined in

[queue/queue.ts:133](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L133)

***

### dequeue()

> **dequeue**(): `null` \| `T`

Dequeues the element at the front of the queue.

#### Returns

`null` \| `T`

The element removed from the front of the queue, or `null` if the queue is empty.

#### Example

```typescript
const queue = new Queue<number>()
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.dequeue()) // Outputs: 10
console.log(queue.dequeue()) // Outputs: 20
console.log(queue.dequeue()) // Outputs: null
```

#### Defined in

[queue/queue.ts:63](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L63)

***

### enqueue()

> **enqueue**(`item`): `void`

Enqueue a new element at the end of the queue

#### Parameters

• **item**: `T`

The Element to add to the queue.

```typescript
const queue = new Queue<number>()
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.size()) // Outputs: 2
```

#### Returns

`void`

#### Defined in

[queue/queue.ts:40](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L40)

***

### getList()

> **getList**(): [`LinkedList`](LinkedList.md)\<`T`\>

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

#### Defined in

[queue/queue.ts:21](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L21)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks whether the queue is empty.

#### Returns

`boolean`

`true` if the queue is empty, or `false` if it contains elements.

#### Example

```typescript
const queue = new Queue<number>();
console.log(queue.isEmpty()); // Outputs: true
queue.enqueue(10);
console.log(queue.isEmpty()); // Outputs: false

#### Defined in

[queue/queue.ts:105](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L105)

***

### peek()

> **peek**(): `null` \| `T`

Returns the element at the front of the queue without removing it.

#### Returns

`null` \| `T`

#### Example

```typescript
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // Outputs: 10
console.log(queue.size()); // Outputs: 2
```

#### Defined in

[queue/queue.ts:88](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L88)

***

### size()

> **size**(): `number`

Returns the number of elements in the queue.

#### Returns

`number`

The number of elements in the queue.

#### Example

```typescript
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.size()); // Outputs: 2
```

#### Defined in

[queue/queue.ts:123](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/queue/queue.ts#L123)
