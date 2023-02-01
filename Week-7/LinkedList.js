class LinkedListNode{
    constructor(val, next){
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

class SingleLinkedList{
    constructor(value){
        if(value){
            this.head = new LinkedListNode(value);
            this.size = 1;
        }else{
            this.head = undefined;
            this.size = 0;
        }
    }
    append(element){
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = new LinkedListNode(element);
        this.size++;
    }
    insertAt(element, index){
        if(index > this.size){
            console.log("Cannot be inserted at a position more than the size of linkedList");
        }else{
            var node = new LinkedListNode(element);
            var curr, prev;
            curr = this.head;
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
               var it = 0 
               while(it<index){
                it++;
                prev = curr;
                curr = curr.next;
               } 
               prev.next = node;
               node.next = curr;
            }
            this.size++;
        }

    }
    removeElement(toFind){
        var temp = this.head;
        var prev = null;

        while(temp!= null){
            if(temp.val == toFind){
                if(prev == null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.val;
            }
            prev = temp
            temp = temp.next
        }
        return -1;
    }
    searchElement(toFind){
        var current = this.head;
        while(current != null){
            if(current.element === toFind) return true;
            current = current.next;
        }
        return false;
    }
    getElementByIndex(index){
        let current = this.head;
        let counter = 0;
        if(index < 0 || index > this.size - 1){
            return "Index incorrect";
        }
        while(counter  != index){
            current = current.next;
            counter++;
        }
        return current.val;
    }
    isEmpty(){
        return this.size == 0;
    }
    length(){
        return this.size;
    }
    printLinkedList(){
        let str = "head --> ";
        var temp = this.head;
        while(temp != null){
            str += temp.val;
            str += " --> ";
            temp = temp.next;
        }
        str += "null"
        console.log(str);
    }
}

module.exports = {SingleLinkedList, LinkedListNode};