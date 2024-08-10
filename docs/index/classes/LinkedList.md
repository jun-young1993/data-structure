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

[linked-list/linked-list.ts:47](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L47)

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

[linked-list/linked-list.ts:80](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L80)

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

[linked-list/linked-list.ts:170](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L170)

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

[linked-list/linked-list.ts:116](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L116)

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

[linked-list/linked-list.ts:153](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L153)

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

[linked-list/linked-list.ts:189](https://github.com/jun-young1993/data-structure/blob/f205746ccba10f87d4e164e6b0f91a626191a53c/src/linked-list/linked-list.ts#L189)
