import {HashTable} from "../../src";

describe('HashTable', () => {
    let hashTable: HashTable<number>;

    beforeEach(() => {
        hashTable = new HashTable<number>();
    });

    test('should initialize with size 0', () => {
        expect(hashTable.size()).toBe(0);
    });

    test('should add and retrieve a value', () => {
        hashTable.put('key1', 10);
        expect(hashTable.get('key1')).toBe(10);
        expect(hashTable.size()).toBe(1);
    });

    test('should update an existing key', () => {
        hashTable.put('key1', 10);
        hashTable.put('key1', 20); // Update value for 'key1'
        expect(hashTable.get('key1')).toBe(20);
        expect(hashTable.size()).toBe(1);
    });

    test('should return null for non-existent key', () => {
        expect(hashTable.get('non-existent-key')).toBeNull();
    });

    test('should handle multiple keys', () => {
        hashTable.put('key1', 10);
        hashTable.put('key2', 20);
        hashTable.put('key3', 30);

        expect(hashTable.get('key1')).toBe(10);
        expect(hashTable.get('key2')).toBe(20);
        expect(hashTable.get('key3')).toBe(30);
        expect(hashTable.size()).toBe(3);
    });

    test('should remove a key-value pair', () => {
        hashTable.put('key1', 10);
        hashTable.put('key2', 20);
        expect(hashTable.remove('key1')).toBe(true);
        expect(hashTable.get('key1')).toBeNull();
        expect(hashTable.size()).toBe(1);
        expect(hashTable.remove('non-existent-key')).toBe(false);
    });

    test('should return true for existing key in containsKey', () => {
        hashTable.put('key1', 10);
        expect(hashTable.containsKey('key1')).toBe(true);
        expect(hashTable.containsKey('key2')).toBe(false);
    });

    test('should handle collisions', () => {
        // Simulate a collision by directly using the hash function
        // Assume the hash function hashes 'key1' and 'keyA' to the same bucket
        hashTable.put('key1', 10);
        hashTable.put('keyA', 20); // Potential collision

        expect(hashTable.get('key1')).toBe(10);
        expect(hashTable.get('keyA')).toBe(20);
        expect(hashTable.size()).toBe(2);
    });

    test('should handle large number of insertions', () => {
        const largeNumber = 1000;
        for (let i = 0; i < largeNumber; i++) {
            hashTable.put(`key${i}`, i);
        }
        expect(hashTable.size()).toBe(largeNumber);
        expect(hashTable.get('key500')).toBe(500);
    });

    test('should remove all keys and check size', () => {
        hashTable.put('key1', 10);
        hashTable.put('key2', 20);
        hashTable.put('key3', 30);

        expect(hashTable.size()).toBe(3);

        hashTable.remove('key1');
        hashTable.remove('key2');
        hashTable.remove('key3');

        expect(hashTable.size()).toBe(0);
    });

    test('should handle multiple keys when the HashTable size is 1', () => {
        const hashTable = new HashTable<number>(1); // 크기를 1로 설정

        // 여러 키-값 쌍 추가 (모두 동일한 버킷에 저장됨)
        hashTable.put('key1', 100);
        hashTable.put('key2', 200);
        hashTable.put('key3', 300);

        // 각 키에 대해 올바른 값을 반환하는지 확인
        expect(hashTable.get('key1')).toBe(100);
        expect(hashTable.get('key2')).toBe(200);
        expect(hashTable.get('key3')).toBe(300);

        // 크기가 3인지 확인
        expect(hashTable.size()).toBe(3);

        // 특정 키 삭제 후에도 다른 키에 영향을 미치지 않는지 확인
        hashTable.remove('key2');
        expect(hashTable.get('key2')).toBeNull();
        expect(hashTable.get('key1')).toBe(100);
        expect(hashTable.get('key3')).toBe(300);

        hashTable.remove('key1');
        expect(hashTable.get('key1')).toBeNull();
        expect(hashTable.get('key3')).toBe(300);

        hashTable.remove('key3');
        expect(hashTable.get('key3')).toBeNull();
        expect(hashTable.size()).toBe(0);
    });
});