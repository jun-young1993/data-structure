import { LinkedList } from "../linked-list";
import HashTableNode from "./hash-table-node";

/**
 * Implementation of a HashTable using LinkedList for separate chaining.
 *
 * @template T - The type of elements in the HashTable
 *
 * @example
 * ```typescript
 * const hashTable = new HashTable<number>();
 * hashTable.put("key1", 1);
 * hashTable.put("key2", 2);
 * console.log(hashTable.get("key1")); // Outputs: 1
 * console.log(hashTable.size()); // Outputs: 2
 * hashTable.remove("key1");
 * console.log(hashTable.get("key1")); // Outputs: null
 * console.log(hashTable.containsKey("key2")); // Outputs: true
 * ```
 */
class HashTable<T> {
    /**
     * Array of LinkedLists, each representing a bucket for separate chaining.
     *
     * @private
     * @type {Array<LinkedList<HashTableNode<T>>>}
     */
    private readonly buckets: Array<LinkedList<HashTableNode<T>>>;

    /**
     * Number of buckets in the HashTable.
     *
     * @private
     * @type {number}
     */
    private readonly numBuckets: number;

    /**
     * Number of key-value pairs stored in the HashTable.
     *
     * @private
     * @type {number}
     */
    private count: number;

    /**
     * Constructs a new HashTable instance.
     *
     * @param {number} [size=16] - The initial number of buckets in the HashTable.
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>(32); // Creates a HashTable with 32 buckets
     * ```
     */
    constructor(size: number = 16) {
        this.numBuckets = size;
        this.buckets = Array.from({ length: size }, () => new LinkedList<HashTableNode<T>>());
        this.count = 0;
    }

    /**
     * Hash function using Polynomial Rolling Hash technique.
     *
     * This method interprets the string as a polynomial, where each character is a term,
     * and 31 is used as the base (or coefficient). The formula is:
     *
     * hash = (char1 * base^n-1 + char2 * base^n-2 + ... + charn * base^0) % numBuckets
     *
     * where `base` is often chosen as a prime number like 31, and `n` is the length of the string.
     *
     * Polynomial Rolling Hash helps in reducing hash collisions, as it considers both
     * the characters and their positions in the string, making it more robust than simple additive hashing.
     *
     * @private
     * @param {string} key - The key to hash
     * @returns {number} - The index in the buckets array
     * @example
     * ```typescript
     * const index = hashTable.hash("key1"); // Returns the bucket index for "key1"
     * ```
     */
    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.numBuckets;
        }
        return hash;
    }

    /**
     * Retrieves the bucket (LinkedList) associated with the given key.
     *
     * @private
     * @param {string} key - The key whose bucket needs to be found.
     * @return {LinkedList<HashTableNode<T>>} - The LinkedList (bucket) where the key should be.
     * @example
     * ```typescript
     * const bucket = hashTable.getBucket("key1");
     * ```
     */
    private getBucket(key: string): LinkedList<HashTableNode<T>> {
        const index = this.hash(key);
        return this.buckets[index];
    }

    /**
     * Inserts or updates the key-value pair in the HashTable.
     *
     * @param {string} key - The key to insert or update.
     * @param {T} value - The value associated with the key.
     * @public
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>();
     * hashTable.put("key1", 10);
     * hashTable.put("key2", 20);
     * console.log(hashTable.get("key1")); // Outputs: 10
     * hashTable.put("key1", 30); // Updates the value for "key1"
     * console.log(hashTable.get("key1")); // Outputs: 30
     * ```
     */
    public put(key: string, value: T): void {
        const bucket = this.getBucket(key);

        let node = bucket.getHead();
        while (node) {
            if (node.getValue().key === key) {
                node.getValue().value = value; // Update existing key
                return;
            }
            node = node.getNext();
        }
        bucket.append(new HashTableNode(key, value)); // Insert new key-value pair
        this.count++;
    }

    /**
     * Retrieves the value associated with the given key.
     *
     * @param {string} key - The key to retrieve.
     * @returns {T | null} - The value associated with the key, or `null` if not found.
     * @public
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>();
     * hashTable.put("key1", 10);
     * console.log(hashTable.get("key1")); // Outputs: 10
     * console.log(hashTable.get("key2")); // Outputs: null
     * ```
     */
    public get(key: string): T | null {
        const bucket = this.getBucket(key);
        let node = bucket.getHead();
        while (node) {
            if (node.getValue().key === key) {
                return node.getValue().value;
            }
            node = node.getNext();
        }
        return null;
    }

    /**
     * Removes the key-value pair from the HashTable.
     *
     * @param {string} key - The key to remove.
     * @returns {boolean} - `true` if the key was removed, `false` otherwise.
     * @public
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>();
     * hashTable.put("key1", 10);
     * hashTable.put("key2", 20);
     * console.log(hashTable.remove("key1")); // Outputs: true
     * console.log(hashTable.remove("key3")); // Outputs: false
     * console.log(hashTable.size()); // Outputs: 1
     * ```
     */
    public remove(key: string): boolean {
        const bucket = this.getBucket(key);
        const sizeBefore = bucket.size();
        let node = bucket.getHead();
        while (node) {
            if (node.getValue().key === key) {
                bucket.remove(node.getValue());
                this.count--;
                return true;
            }
            node = node.getNext();
        }
        return sizeBefore > bucket.size();
    }

    /**
     * Checks if the HashTable contains the given key.
     *
     * @param {string} key - The key to check.
     * @returns {boolean} - `true` if the key exists, `false` otherwise.
     * @public
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>();
     * hashTable.put("key1", 10);
     * console.log(hashTable.containsKey("key1")); // Outputs: true
     * console.log(hashTable.containsKey("key2")); // Outputs: false
     * ```
     */
    public containsKey(key: string): boolean {
        return this.get(key) !== null;
    }

    /**
     * Returns the number of key-value pairs in the HashTable.
     *
     * @returns {number} - The number of elements in the HashTable.
     * @public
     * @example
     * ```typescript
     * const hashTable = new HashTable<number>();
     * hashTable.put("key1", 10);
     * hashTable.put("key2", 20);
     * console.log(hashTable.size()); // Outputs: 2
     * ```
     */
    public size(): number {
        return this.count;
    }
}

export default HashTable;