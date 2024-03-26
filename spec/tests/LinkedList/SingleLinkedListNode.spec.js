import SingleLinkedListNode from "../../../LinkedList/SingleLinkedList/SingleLinkedListNode.js"

describe('Single Linked List Node', () => {
    it ('should create linked node with value', () => {
        const node = new SingleLinkedListNode(1)

        expect(node.value).toBe(1)
        expect(node.tail).toBeNull()
    })

    it ('should create linked node with object as value', () => {
        const node = new SingleLinkedListNode({ value: 1, key: 'test' })

        expect(node.value.value).toBe(1)
        expect(node.value.key).toBe('test')
        expect(node.tail).toBeNull()
    })

    it ('should link nodes together', () => {
        const node2 = new SingleLinkedListNode(2)
        const node1 = new SingleLinkedListNode(1, node2)

        expect(node1.tail).toBeDefined()
        expect(node2.tail).toBeNull()
        expect(node1.value).toBe(1)
        expect(node1.tail.value).toBe(2)
    })
})