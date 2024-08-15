[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [deque](../README.md) / Deque

# Class: Deque\<T\>

Implementation of a Deque (Double-ended Queue)

## Example

```typescript
const deque = new Deque<number>()
deque.addFront(10)
deque.addBack(20)
deque.size() //Outputs:2
deque.peekFront() // Outputs: 10
deque.peekBack() // Outputs: 20
```

## Type Parameters

• **T**

The type of elements in the deque

## Constructors

### new Deque()

> **new Deque**\<`T`\>(): [`Deque`](Deque.md)\<`T`\>

#### Returns

[`Deque`](Deque.md)\<`T`\>

#### Defined in

[deque/deque.ts:19](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L19)

## Methods

### addBack()

> **addBack**(`value`): `void`

Adds an element to the back of the deque.

#### Parameters

• **value**: `T`

The value to be added to the back

#### Returns

`void`

#### Example

```typescript
const deque = new Deque<number>()
deque.addBack(10)
deque.size() // Outputs: 1
deque.peekFront() // Outputs: 10
deque.peekBack() // Outputs: 10
```

#### Defined in

[deque/deque.ts:56](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L56)

***

### addFront()

> **addFront**(`value`): `void`

Adds an element to the front of the deque.

#### Parameters

• **value**: `T`

= The value to be added to the front

#### Returns

`void`

#### Example

```typescript
const deque = new Deque<number>()
deque.addFront(10)
deque.size() // Outputs: 1
deque.peekFront() // Outputs: 10
deque.peekBack() // Outputs: 10
```

#### Defined in

[deque/deque.ts:37](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L37)

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the deque is empty.

#### Returns

`boolean`

`true` if the deque is empty, `false` otherwise

#### Example

```typescript
const deque = new Deque<number>()
deque.isEmpty() // Outputs: true
deque.size() // Outputs: 0
deque.addBack(10)
deque.peekFront() // Outputs: 10
deque.isEmpty() // Outputs: false
deque.size() // Outputs: 1
deque.peekBack() // Outputs: 10
deque.isEmpty() // Outputs: false
deque.size() // Outputs: 2
```

#### Defined in

[deque/deque.ts:174](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L174)

***

### peekBack()

> **peekBack**(): `null` \| `T`

Returns the element at the back of the deque without removing it

#### Returns

`null` \| `T`

The element at the back, or `null` if the deque is empty

#### Example

```typescript
const deque = new Deque<number>()
deque.addBack(10)
deque.peekBack() // Outputs: 10
deque.addBack(20)
deque.peekBack() // Outputs: 20
```

#### Defined in

[deque/deque.ts:130](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L130)

***

### peekFront()

> **peekFront**(): `null` \| `T`

Returns the element at the front of the deque without removing it.

#### Returns

`null` \| `T`

The element at the front, or `null` if the deque is empty

#### Example

```typescript
const deque = new Deque<number>()
deque.addFront(10)
deque.peekFront() // Outputs: 10
deque.addFront(20)
deque.peekFront() // Outputs: 20
```

#### Defined in

[deque/deque.ts:150](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L150)

***

### removeBack()

> **removeBack**(): `null` \| `T`

Removes and returns the element from the back of the deque.

#### Returns

`null` \| `T`

The element at the back, or `null` if the deque

```typescript
const deque = new Deque<number>()
deque.addBack(10)
deque.addBack(20)
deque.removeBack() // Outputs: 10
deque.size() // Outputs: 1
deque.removeBack() // Outputs: 20
deque.size() // Outputs: 0
deque.isEmpty() // Outputs: true
deque.removeBack() // Outputs: null
```

#### Defined in

[deque/deque.ts:107](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L107)

***

### removeFront()

> **removeFront**(): `null` \| `T`

Removes and returns the element from the front of the deque.

#### Returns

`null` \| `T`

The element at the front, or `null` if the deque is empty

#### Example

```typescript
const deque = new Deque<number>()
deque.addBack(10)
deque.addBack(20)
deque.removeFront() // Outputs: 10
deque.size() // Outputs: 1
deque.removeFront() // Outputs: 20
deque.size() // Outputs: 0
deque.isEmpty() // Outputs: true
deque.removeFront() // Outputs: null
```

#### Defined in

[deque/deque.ts:79](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L79)

***

### size()

> **size**(): `number`

number of elements in the deque

#### Returns

`number`

number of elements in the deque

#### Example

```typescript
const deque = new Deque<number>()
deque.size() // Outputs: 0
deque.addBack(10)
deque.size() // Outputs: 1
deque.peekBack() // Outputs: 10
deque.size() // Outputs: 2
```

#### Defined in

[deque/deque.ts:194](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L194)

***

### toArray()

> **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[deque/deque.ts:203](https://github.com/jun-young1993/data-structure/blob/390429224bd67d7bf107be068638a90c2f060f71/src/deque/deque.ts#L203)
