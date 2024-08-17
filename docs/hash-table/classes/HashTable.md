[**node-data-structure**](../../README.md) • **Docs**

***

[node-data-structure](../../modules.md) / [hash-table](../README.md) / HashTable

# Class: HashTable\<T\>

Implementation of a HashTable using LinkedList for separate chaining.

## Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 1);
hashTable.put("key2", 2);
console.log(hashTable.get("key1")); // Outputs: 1
console.log(hashTable.size()); // Outputs: 2
hashTable.remove("key1");
console.log(hashTable.get("key1")); // Outputs: null
console.log(hashTable.containsKey("key2")); // Outputs: true
```

## Type Parameters

• **T**

The type of elements in the HashTable

## Constructors

### new HashTable()

> **new HashTable**\<`T`\>(`size`?): [`HashTable`](HashTable.md)\<`T`\>

Constructs a new HashTable instance.

#### Parameters

• **size?**: `number` = `16`

The initial number of buckets in the HashTable.

#### Returns

[`HashTable`](HashTable.md)\<`T`\>

#### Example

```typescript
const hashTable = new HashTable<number>(32); // Creates a HashTable with 32 buckets
```

#### Defined in

[hash-table/hash-table.ts:55](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L55)

## Methods

### containsKey()

> **containsKey**(`key`): `boolean`

Checks if the HashTable contains the given key.

#### Parameters

• **key**: `string`

The key to check.

#### Returns

`boolean`

- `true` if the key exists, `false` otherwise.

#### Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 10);
console.log(hashTable.containsKey("key1")); // Outputs: true
console.log(hashTable.containsKey("key2")); // Outputs: false
```

#### Defined in

[hash-table/hash-table.ts:208](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L208)

***

### get()

> **get**(`key`): `null` \| `T`

Retrieves the value associated with the given key.

#### Parameters

• **key**: `string`

The key to retrieve.

#### Returns

`null` \| `T`

- The value associated with the key, or `null` if not found.

#### Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 10);
console.log(hashTable.get("key1")); // Outputs: 10
console.log(hashTable.get("key2")); // Outputs: null
```

#### Defined in

[hash-table/hash-table.ts:151](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L151)

***

### put()

> **put**(`key`, `value`): `void`

Inserts or updates the key-value pair in the HashTable.

#### Parameters

• **key**: `string`

The key to insert or update.

• **value**: `T`

The value associated with the key.

#### Returns

`void`

#### Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 10);
hashTable.put("key2", 20);
console.log(hashTable.get("key1")); // Outputs: 10
hashTable.put("key1", 30); // Updates the value for "key1"
console.log(hashTable.get("key1")); // Outputs: 30
```

#### Defined in

[hash-table/hash-table.ts:122](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L122)

***

### remove()

> **remove**(`key`): `boolean`

Removes the key-value pair from the HashTable.

#### Parameters

• **key**: `string`

The key to remove.

#### Returns

`boolean`

- `true` if the key was removed, `false` otherwise.

#### Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 10);
hashTable.put("key2", 20);
console.log(hashTable.remove("key1")); // Outputs: true
console.log(hashTable.remove("key3")); // Outputs: false
console.log(hashTable.size()); // Outputs: 1
```

#### Defined in

[hash-table/hash-table.ts:179](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L179)

***

### size()

> **size**(): `number`

Returns the number of key-value pairs in the HashTable.

#### Returns

`number`

- The number of elements in the HashTable.

#### Example

```typescript
const hashTable = new HashTable<number>();
hashTable.put("key1", 10);
hashTable.put("key2", 20);
console.log(hashTable.size()); // Outputs: 2
```

#### Defined in

[hash-table/hash-table.ts:225](https://github.com/jun-young1993/data-structure/blob/aceac108cb0dab76587bb5b0477739cbebe8772b/src/hash-table/hash-table.ts#L225)
