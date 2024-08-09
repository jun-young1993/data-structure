[**data-structure**](../../README.md) • **Docs**

***

[data-structure](../../modules.md) / [index](../README.md) / LinkedListNode

# Class: LinkedListNode\<T\>

Represents a node in a linked list

## Example

```typescript
	
	const linkedListNode =new LinkedListNode<number>(1);
	
```

## Type Parameters

• **T**

The type of the value stored in the node

## Constructors

### new LinkedListNode()

> **new LinkedListNode**\<`T`\>(`value`): [`LinkedListNode`](LinkedListNode.md)\<`T`\>

Creates an instance of a Node

#### Parameters

• **value**: `T`

#### Returns

[`LinkedListNode`](LinkedListNode.md)\<`T`\>

#### Defined in

[linked-list/linked-list-node.ts:35](https://github.com/jun-young1993/data-structure/blob/eae160e9458303b4822c938483624a03a0697697/src/linked-list/linked-list-node.ts#L35)

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

#### Defined in

[linked-list/linked-list-node.ts:72](https://github.com/jun-young1993/data-structure/blob/eae160e9458303b4822c938483624a03a0697697/src/linked-list/linked-list-node.ts#L72)

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

#### Defined in

[linked-list/linked-list-node.ts:53](https://github.com/jun-young1993/data-structure/blob/eae160e9458303b4822c938483624a03a0697697/src/linked-list/linked-list-node.ts#L53)
