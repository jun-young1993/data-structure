export interface LinkedListInterface<T> {
	append(value: T): void
	prepend(value: T): void
	remove(value: T): boolean
	size(): number
	isEmpty(): boolean
	toArray(): T[]
	clear(): void
}
export interface LinkedListNodeInterface<T> {
	value: T
	next: LinkedListNodeInterface<T> | null
	getValue: () => T
	getNext:() => LinkedListNodeInterface<T> | null
	isNext:() => boolean
	setNext:(node: LinkedListNodeInterface<T>) => LinkedListNodeInterface<T>
}
