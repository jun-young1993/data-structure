[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / LinkedListNode

# Class: LinkedListNode\<T\>

Represents a node in a linked list

## Example

```typescript
	
	const linkedListNode =new LinkedListNode<number>(1);
	
```

## Type Parameters

• **T**

The type of the value stored in the node

## Implements

- `LinkedListNodeInterface`\<`T`\>

## Constructors

### new LinkedListNode()

> **new LinkedListNode**\<`T`\>(`value`): [`LinkedListNode`](LinkedListNode.md)\<`T`\>

Creates an instance of a Node

#### Parameters

• **value**: `T`

#### Returns

[`LinkedListNode`](LinkedListNode.md)\<`T`\>

#### Defined in

[linked-list/linked-list-node.ts:39](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L39)

## Properties

### next

> **next**: `null` \| [`LinkedListNode`](LinkedListNode.md)\<`T`\> = `null`

the reference to the next node in the linked list

#### Memberof

LinkedListNode

#### Implementation of

`LinkedListNodeInterface.next`

#### Defined in

[linked-list/linked-list-node.ts:32](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L32)

***

### value

> **value**: `T`

the value stored in the node

#### Memberof

LinkedListNode

#### Implementation of

`LinkedListNodeInterface.value`

#### Defined in

[linked-list/linked-list-node.ts:23](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L23)

## Methods

### getNext()

> **getNext**(): `null` \| [`LinkedListNode`](LinkedListNode.md)\<`T`\>

Returns the next value stored in the object.

#### Returns

`null` \| [`LinkedListNode`](LinkedListNode.md)\<`T`\>

The next value stored in the object

#### Example

```typescript

const linkedListNode = new LinkedListNode<number>(1)
const nextLinkedListNode = linkedListNode.getNext();

console.log(nextlinkedListNode) // null

```

#### Implementation of

`LinkedListNodeInterface.getNext`

#### Defined in

[linked-list/linked-list-node.ts:78](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L78)

***

### getValue()

> **getValue**(): `T`

Returns the value stored in the object.

#### Returns

`T`

The value stored in the object

#### Example

```typescript

const linkedListNode = new LinkedListNode<number>(1)
const value = linkedListNode.getValue();

console.log(value) // 1

```

#### Implementation of

`LinkedListNodeInterface.getValue`

#### Defined in

[linked-list/linked-list-node.ts:58](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L58)

***

### isNext()

> **isNext**(): `boolean`

#### Returns

`boolean`

#### Implementation of

`LinkedListNodeInterface.isNext`

#### Defined in

[linked-list/linked-list-node.ts:87](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L87)

***

### setNext()

> **setNext**(`node`): [`LinkedListNode`](LinkedListNode.md)\<`T`\>

The next value stored in the object

#### Parameters

• **node**: [`LinkedListNode`](LinkedListNode.md)\<`T`\>

#### Returns

[`LinkedListNode`](LinkedListNode.md)\<`T`\>

The next value stored in the object

#### Example

```typescript
const newNode = new LinkedListNode<T>(1)
newNode.setNext(2)

newNode.getNext() // Outputs: 2
```

#### Implementation of

`LinkedListNodeInterface.setNext`

#### Defined in

[linked-list/linked-list-node.ts:106](https://github.com/jun-young1993/data-structure/blob/2668228c90ac92cf2ab348e0eddda1f2910f549d/src/linked-list/linked-list-node.ts#L106)
