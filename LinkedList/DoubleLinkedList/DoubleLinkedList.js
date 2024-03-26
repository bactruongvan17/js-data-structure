import DoubleLinkedListNode from "./DoubleLinkedListNode.js"

export default class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new DoubleLinkedListNode(value)

        if (!this.head) {
            this.head = node
            this.tail = node

            return this
        }

        this.tail.next = node
        node.previous = this.tail
        this.tail = node

        return this

    }

    prepend(value) {
        const node = new DoubleLinkedListNode(value, this.head)

        if (!this.head) {
            this.head = node
            this.tail = node

            return this
        }

        this.head.previous = node
        this.head = node

        return this
    }

    reverse() {

    }

    delete(value) {

    }

    find(value) {

    }
}