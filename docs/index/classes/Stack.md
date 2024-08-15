[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / Stack

# Class: Stack\<T\>

Represents a stack implemented using a linked list.

A node contains a value and a reference to the next node in the list.

## Type Parameters

• **T**

The type of value stored in the node.

## Implements

- [`StackInterface`](../interfaces/StackInterface.md)\<`T`\>

## Constructors

### new Stack()

> **new Stack**\<`T`\>(): [`Stack`](Stack.md)\<`T`\>

#### Returns

[`Stack`](Stack.md)\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Removes all elements from the stack.

This method clears the stack, resetting its size to zero

#### Returns

`void`

#### Example

```typescript
const stack = new Stack<number>()
stack.push(10)
stack.push(20)
console.log(stack.size()) // Outputs: 2
stack.clear()
console.log(stack.size()) // Outputs: 0
```

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`clear`](../interfaces/StackInterface.md#clear)

#### Defined in

[stack/stack.ts:44](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L44)

***

### getList()

> **getList**(): [`LinkedList`](LinkedList.md)\<`T`\>

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

#### Defined in

[stack/stack.ts:24](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L24)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks whether the queue is empty

#### Returns

`boolean`

`true` if the queue is empty, or `false` if it contains elements.

#### Example

```typescript
const stack = new Stack<number>()
console.log(stack.isEmpty()) // Outputs: true
stack.push(10)
stack.push(20)
console.log(stack.isEmpty()) // Outputs: false
stack.clear()
console.log(stack.isEmpty()) // Outputs: true
```

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`isEmpty`](../interfaces/StackInterface.md#isempty)

#### Defined in

[stack/stack.ts:64](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L64)

***

### peek()

> **peek**(): `null` \| `T`

Returns the top element of the stack without removing it.

#### Returns

`null` \| `T`

The element at the top of the stack, or `null` if the stack is empty.

#### Example

```typescript
const stack = new LinkedListStack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Outputs: 20
```

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`peek`](../interfaces/StackInterface.md#peek)

#### Defined in

[stack/stack.ts:79](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L79)

***

### pop()

> **pop**(): `null` \| `T`

Removes and returns the top element of the stack.

#### Returns

`null` \| `T`

The element removed from the top of the stack, or null if the stack is empty

#### Example

```typescript
const stack = new LinkedListStack<number>();
stack.push(10);
console.log(stack.pop()); // Outputs: 10
console.log(stack.pop()); // Outputs: undefined
```

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`pop`](../interfaces/StackInterface.md#pop)

#### Defined in

[stack/stack.ts:95](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L95)

***

### push()

> **push**(`item`): `void`

Pushed a new element onto the top of the stack

#### Parameters

• **item**: `T`

The element to push onto the stack

#### Returns

`void`

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`push`](../interfaces/StackInterface.md#push)

#### Defined in

[stack/stack.ts:109](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L109)

***

### size()

> **size**(): `number`

Returns the number of elements in the stack.

#### Returns

`number`

The number of elements in the stack.

#### Example

```typescript
const stack = new Queue<number>()
stack.push(10)
stack.push(20)
console.log(stack.size()) // Outputs: 2
```

#### Implementation of

[`StackInterface`](../interfaces/StackInterface.md).[`size`](../interfaces/StackInterface.md#size)

#### Defined in

[stack/stack.ts:126](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/stack/stack.ts#L126)
