function createStack() {
    const items = [];
    return  {
        push(item){
            items.push(item);
        },
        pop: ()=> {
            return items.pop();
        }
    };
}


const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined

// Earlier the items was a part of the returning object so when the stack was equated to function invocation `createStack`
// it lead to the stack object containing the items array as well, when we removed the items array from the object,
// then there was no way that stack variable could get access to that, and it can not even make changes to that array as it is out
// of its scope to access the data of that array.