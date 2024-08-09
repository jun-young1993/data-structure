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

console.log(linkedList.size())// Outputs: 3

```

#### Defined in

[linked-list/linked-list.ts:47](https://github.com/jun-young1993/data-structure/blob/8bc9ec3869d8d29bb057d7e9455cf0209885aa17/src/linked-list/linked-list.ts#L47)

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

[linked-list/linked-list.ts:80](https://github.com/jun-young1993/data-structure/blob/8bc9ec3869d8d29bb057d7e9455cf0209885aa17/src/linked-list/linked-list.ts#L80)

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

[linked-list/linked-list.ts:116](https://github.com/jun-young1993/data-structure/blob/8bc9ec3869d8d29bb057d7e9455cf0209885aa17/src/linked-list/linked-list.ts#L116)
