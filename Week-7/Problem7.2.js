const {SingleLinkedList, LinkedListNode} = require("./LinkedList.js");

function rotateLinkedList(ll, k){
    if(ll.head == null){
        return null;
    }
    tail = ll.head;
    head = ll.head;
    while(tail.next !=null){
        tail = tail.next;
    }
    temp = head;
    while(k > 0){
        prev = temp;
        temp = temp.next;
        k--;
    }  
    prev.next = null; 
    newHead =  temp;
    tail.next = head;
    return newHead;
}

let ll = new SingleLinkedList(2);
ll.append(4);
ll.append(7);
ll.append(8);
ll.append(9);

ll.printLinkedList();


llrot =  rotateLinkedList(ll, 2)