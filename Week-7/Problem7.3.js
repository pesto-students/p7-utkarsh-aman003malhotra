const {SingleLinkedList, LinkedListNode} = require("./LinkedList.js");

const ll = new SingleLinkedList(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

ll.head.next.next.next = ll.head.next.next;

function detectloop(ll){
    slow = ll.head;
    fast = ll.head;

    while(slow &&  fast &&  fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            return true
        }
    }

    return false;
}

console.log(detectloop(ll));