export interface StackInterface<T> {
    push(item: T): void
    pop(): T | null
    peek(): T | null
    isEmpty(): boolean
    size(): number
    clear(): void
}