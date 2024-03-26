import SingleLinkedListNode from "./SingleLinkedListNode.js";

export default class SingleLinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        const node = new SingleLinkedListNode(value)

        if (!this.head) {
            this.head = node

            return this
        }

        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node

        return this
    }

    reverse() {
        let currentNode = this.head
        let prevNode = null
        let nextNode = null

        while (currentNode) {
            nextNode = currentNode.next

            currentNode.next = prevNode

            prevNode = currentNode

            currentNode = nextNode
        }

        this.head = prevNode

        return this
    }

    delete(value) {

    }

    find(value) {
        
    }

    countOfNodes() {
        let count = 0

        if (this.head === null) {
            return count
        }

        let currentNode = this.head
        while (currentNode) {
            count++
            currentNode = currentNode.next
        }

        return count
    }

    toArray() {
        const nodes = []

        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }

        return nodes
    }
}