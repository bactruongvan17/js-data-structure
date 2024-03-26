import SingleLinkedList from "../../../LinkedList/SingleLinkedList/SingleLinkedList.js"

describe('Single Linked List', () => {
    it ('should create empty linked list', () => {
        const linkedList = new SingleLinkedList()
        expect(linkedList.countOfNodes()).toBe(0)
    })

    it ('should append node to linked list', () => {
        const linkedList = new SingleLinkedList()

        expect(linkedList.head).toBeNull()

        linkedList.append(1)
        linkedList.append(2)

        expect(linkedList.countOfNodes()).toBe(2)
    })

    it ('should reverse nodes in linked list', () => {
        const linkedList = new SingleLinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        expect(linkedList.head.value).toBe(1)

        linkedList.reverse()
        expect(linkedList.head.value).toBe(4)
        expect(linkedList.head.next.value).toBe(3)
    })
})