export default class DoubleLinkedListNode {
    constructor(value, next = null, previous = null) {
        this.value = value
        this.next = next
        this.previous = previous
    }
}