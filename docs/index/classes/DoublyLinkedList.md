[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList\<T\>

Implementation of Dobly Linked List.

## Template

The type of the elemetns in the linked list

## Example

```typescript
const list = new DoublyLinkedList<number>
list.append(10)
list.prepend(5)
console.log(list.size()) //Outputs: 2
console.log(list.toArray()) // Outputs: [5,10]
```

## Type Parameters

• **T**

## Constructors

### new DoublyLinkedList()

> **new DoublyLinkedList**\<`T`\>(): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

## Methods

### append()

> **append**(`value`): `void`

Appends a new element to the end of the linked list

#### Parameters

• **value**: `T`

The value to be added to the linked list

#### Returns

`void`

#### Example

```typescript
const list = new DoublyLinkedList<number>()
list.append(10)
console.log(list.toArray()) // Outputs: [10]
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:74](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L74)

***

### clear()

> **clear**(): `void`

Initialized the linked list

#### Returns

`void`

#### Example

```typescript
const list = new DoublyLinkedList<number>();
list.append(10)
list.append(20)
list.clear()
console.log(list.size()) // Outputs: 0
console.log(list.isEmpty()) // Outputs: true
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:262](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L262)

***

### get()

> **get**(`index`): `null` \| `T`

Retrives the value at the specified index in the linked list.

#### Parameters

• **index**: `number`

The zero-based index of the element to retrieve

#### Returns

`null` \| `T`

The value at the specified index, or `null` if the index is out of bounds.

#### Throws

Throws an error if the index is negative.

#### Example

```typescript
const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
console.log(list.get(1)); // Outputs: 20
console.log(list.get(5)); // Outputs: null
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:166](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L166)

***

### getHead()

> **getHead**(): `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The head of the linked list

#### Returns

`null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:48](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L48)

***

### getTail()

> **getTail**(): `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The tail of the linked list

#### Returns

`null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:57](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L57)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks whether the linked list is empty.

#### Returns

`boolean`

`true` if the list is empty, `false` otherwise

#### Example

```typescript
const list = new DoublyLinkedList<number>();
console.log(list.isEmpty()); // Outputs: true
list.append(10);
console.log(list.isEmpty()); // Outputs: false
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:217](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L217)

***

### prepend()

> **prepend**(`value`): `void`

Prepends a new element to the start of the linked list

#### Parameters

• **value**: `T`

#### Returns

`void`

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:93](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L93)

***

### remove()

> **remove**(`value`): `boolean`

Removes the first occurrence of the specified value from the linked list.

#### Parameters

• **value**: `T`

The value to be removed from the list

#### Returns

`boolean`

`true` if the value was found and removed, `false` oherwise

#### Example

```typescript
const list = new DoublyLinkedList<number>();
list.append(10);
list.remove(10);
console.log(list.size()); // Outputs: 0
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:122](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L122)

***

### size()

> **size**(): `number`

Returns the number of elements in the linked list.

#### Returns

`number`

the number of elements in the list

#### Example

```
const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
console.log(list.size()); // Outputs: 2
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:199](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L199)

***

### toArray()

> **toArray**(): `T`[]

Converts the linked list to an array of its elements

#### Returns

`T`[]

An array containing all elements in the linked list, in order.

#### Example

```typescript
const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
console.log(list.toArray()); // 출력 결과: [10, 20, 30]
```

#### Defined in

[doubly-linked-list/doubly-linked-list.ts:236](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list.ts#L236)
