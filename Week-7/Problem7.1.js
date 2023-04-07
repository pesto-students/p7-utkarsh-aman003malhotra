const {SingleLinkedList, LinkedListNode} = require("./LinkedList.js");

function reverseLinkedList(head){
    if(head == null || head.next == null){
        return head;
    }
    
    newHead = reverseLinkedList(head.next);
    tail = head.next;
    tail.next = head;
    head.next = null;
    return newHead;
}



const ll = new SingleLinkedList(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

ll.printLinkedList();
// head --> 1 --> 2 --> 3 --> 4 --> 5 --> null

let temp = new SingleLinkedList()
temp.head = reverseLinkedList(ll.head);

temp.printLinkedList();
// head --> 5 --> 4 --> 3 --> 2 --> 1 --> null

module.export = {LinkedListNode, SingleLinkedList};