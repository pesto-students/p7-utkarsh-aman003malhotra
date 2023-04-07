const {Stack} = require("./Stack.js");

class implementQueueWithTwoStack{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        while(this.stack1.length() > 0){
            this.stack2.push(this.stack1.pop())
        }
        let val = this.stack2.pop();
        while(this.stack2.length() > 0){
            this.stack1.push(this.stack2.pop())
        }
        return val;
    }

    length(){
        return this.stack1.length();
    }
}

queue1 = new implementQueueWithTwoStack();
queue2 = new implementQueueWithTwoStack();


function implement(str,queue){
    str = str.replaceAll(' ','');
    for(let i = 0; i < str.length; i++){
        if(str[i] == '1'){
            if(str[i+1]){
                queue.enqueue(parseInt(str[i+1]))
                i = i+1;
            }
        }else if(str[i] == '2'){
                let ans  = (queue.length() == 0) ? "-1" : queue.dequeue()
                console.log(ans);
        }else{
            continue;
        }
    }
}


implement("1 2 1 3 2 1 4 2",queue1)
implement("1 2 2 2 1 4",queue2)
