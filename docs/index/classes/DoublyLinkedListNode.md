[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / DoublyLinkedListNode

# Class: DoublyLinkedListNode\<T\>

Represents a node in a doubly linked list, extending a singly linked list node.

## Type Parameters

• **T**

The type of the value stored in the node

## Constructors

### new DoublyLinkedListNode()

> **new DoublyLinkedListNode**\<`T`\>(`value`): [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

Creates an instance of a DoublyLinkedListNode

#### Parameters

• **value**: `T`

The value to be stored in the node

#### Returns

[`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:40](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L40)

## Properties

### next

> **next**: `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\> = `null`

The reference to the next node in the doubly linked list

#### Memberof

DoublyLinkedListNode

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:33](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L33)

***

### prev

> **prev**: `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\> = `null`

The reference to the previous node in the doubly linked list

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:24](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L24)

***

### value

> **value**: `T`

the value stored in the node

#### Memberof

DoublyLinkedListNode

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:15](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L15)

## Methods

### getNext()

> **getNext**(): `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

Returns the Next node inthe doubly linked list

#### Returns

`null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The previous node or `null` if there is none

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:75](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L75)

***

### getPrev()

> **getPrev**(): `null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

Returns the previous node in the doubly linked list.

#### Returns

`null` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The previous node or `null` if there is none

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:65](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L65)

***

### getValue()

> **getValue**(): `T`

Returns the value stored in the object

#### Returns

`T`

The value stored in the object

#### Example

```typescript
const doublyLinkedListNode = new DoublyLinkedListNode<number>(10)
console.log(doublyLinkedListNode.getValue()) / Outputs: 10
```

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:54](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L54)

***

### isNext()

> **isNext**(): `boolean`

Checks if there is a next node.

#### Returns

`boolean`

`true` if there is a next node, `false` otherwise

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:95](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L95)

***

### isPrev()

> **isPrev**(): `boolean`

Checks if there is a previous node.

#### Returns

`boolean`

`true` if there is a previous node, `false` otherwise

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:85](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L85)

***

### setNext()

> **setNext**(`node`): [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

Sets the next node in the doubly linked list.

#### Parameters

• **node**: [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The node to set as next

#### Returns

[`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The newly set next node

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:118](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L118)

***

### setPrev()

> **setPrev**(`node`): [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

Sets the previous node in the doubly linked list.

#### Parameters

• **node**: [`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The node to set as previous

#### Returns

[`DoublyLinkedListNode`](DoublyLinkedListNode.md)\<`T`\>

The newly set previous node

#### Defined in

[doubly-linked-list/doubly-linked-list-node.ts:106](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/doubly-linked-list/doubly-linked-list-node.ts#L106)
