const {Stack} = require("./Stack.js");

function nextGreaterElement(arr){
    let stack = new Stack();
    nextGrel = [];
    for(let i = arr.length-1; i >= 0; i--){
        if(stack.peek() < arr[i]){
            while(stack.peek() < arr[i]){
                stack.pop();
            }            
        }
        if(stack.length() == 0){
            nextGrel[i] = -1;
        }else{
            nextGrel[i] = stack.peek();
            
        }
        stack.push(arr[i]);
    }
    return nextGrel;

}

arr = nextGreaterElement([1, 3, 2, 4])
console.log(arr); //[ 3, 4, 4, -1 ]