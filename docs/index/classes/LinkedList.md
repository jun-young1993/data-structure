[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [index](../README.md) / LinkedList

# Class: LinkedList\<T\>

## Type Parameters

• **T**

## Constructors

### new LinkedList()

> **new LinkedList**\<`T`\>(): [`LinkedList`](LinkedList.md)\<`T`\>

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): `linkedListIterator`\<`T`\>

#### Returns

`linkedListIterator`\<`T`\>

#### Defined in

[linked-list/linked-list.ts:5](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L5)

***

### append()

> **append**(`value`): `void`

Appends a new element to the end of the linked list.

#### Parameters

• **value**: `T`

The value to be added to the linked list.

#### Returns

`void`

The linked list instance with the new value appended.

#### Remarks

The time complexity of this operation is O(n), where n is the number of nodes in list, as the method may need to traverse the entire list to find and remove the node.

#### Example

```typescript
const linkedList = new LinkedList<number>();

console.log(linkedList.size())// Outputs: 0

linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.get(0) // Outputs: 10
linkedList.get(1) // Outputs: 20
linkedList.get(2) // Outputs: 30

console.log(linkedList.size())// Outputs: 3

```

#### Defined in

[linked-list/linked-list.ts:64](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L64)

***

### clear()

> **clear**(): `void`

Initialized the linked list

#### Returns

`void`

#### Example

```typescript
const list = new LinkedList<number>();
list.append(10)
list.append(20)
list.clear()
console.log(list.size()) // Outputs: 0
console.log(list.isEmpty()) // Outputs: true
```

#### Defined in

[linked-list/linked-list.ts:271](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L271)

***

### get()

> **get**(`index`): `null` \| `T`

Retrievers the value at the speified index in the linked list.

#### Parameters

• **index**: `number`

The Zero-based index of the element to retrieve

#### Returns

`null` \| `T`

The value at the specified index, or `null` if the index is out of bounds.

#### Throws

Throws an error if the index is negative.

#### Example

```typescript
const list = new LinkedList<number>();
list.append(10);
list.append(20);
console.log(list.get(1)); // Outputs: 20
console.log(list.get(5)); // Outputs: null

#### Defined in

[linked-list/linked-list.ts:137](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L137)

***

### getHead()

> **getHead**(): `null` \| [`LinkedListNode`](LinkedListNode.md)\<`T`\>

The head of the linked list

#### Returns

`null` \| [`LinkedListNode`](LinkedListNode.md)\<`T`\>

The head of the linked list

#### Defined in

[linked-list/linked-list.ts:31](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L31)

***

### isEmpty()

> **isEmpty**(): `boolean`

Determines whether the linked list is empty

#### Returns

`boolean`

`true` if the list is empty, or `false` if it contains any elements.

#### Example

```typescript
const list = new LinkedList<number>();
console.log(list.isEmpty()); // Outputs: true
list.append(10);
console.log(list.isEmpty()); // Outputs: false
```

#### Defined in

[linked-list/linked-list.ts:227](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L227)

***

### prepend()

> **prepend**(`value`): `void`

Prepends a new element to the end of the linked list.

#### Parameters

• **value**: `T`

The value to be added to the linked list.

#### Returns

`void`

The linked list instance with the new value appended.

#### Remarks

The time complexity of this operation is O(n), where n is the number of nodes in list, as the method may need to traverse the entire list to find and remove the node.

#### Example

```typescript
const linkedList = new LinkedList<number>();

console.log(linkedList.size())// Outputs: 0

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.get(0) // Outputs: 30
linkedList.get(1) // Outputs: 20
linkedList.get(2) // Outputs: 10
console.log(linkedList.size())// Outputs: 3

```

#### Defined in

[linked-list/linked-list.ts:107](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L107)

***

### remove()

> **remove**(`value`): `boolean`

Removes the first occurrence of the specified value from the linked list.

#### Parameters

• **value**: `T`

The Value to remove from the list

#### Returns

`boolean`

`true` if the value was found and removed, or `false` if the value was not found.

#### Example

```typescript
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
console.log(list.remove(20)); // Outputs: true
console.log(list.size()); // Outputs: 2
console.log(list.remove(40)); // Outputs: false
```

#### Defined in

[linked-list/linked-list.ts:173](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L173)

***

### size()

> **size**(): `number`

Gets The number of elements in the linked list.

#### Returns

`number`

- The number of elements in the list

#### Example

```typescript
const list = new LinkedList<number>();
console.log(list.size()); // Outputs: 0
list.append(10);
console.log(list.size()); // Outputs: 1
```

#### Defined in

[linked-list/linked-list.ts:210](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L210)

***

### toArray()

> **toArray**(): `T`[]

Converts the linked list to an array of its elements

#### Returns

`T`[]

An array containing all elements in the linked list, in order.

#### Example

```typescript
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
console.log(list.toArray()); // 출력 결과: [10, 20, 30]
```

#### Defined in

[linked-list/linked-list.ts:246](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/linked-list/linked-list.ts#L246)
