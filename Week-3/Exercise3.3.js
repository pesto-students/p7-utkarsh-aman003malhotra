function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[ increment , log ] = createIncrement(); 
increment();
increment();
increment();
log();// What is logged? // Count is 0


// when log function is called then count comes to be 0 this is becuase when increment is called three times 
// but message is called only once at the time of const[ increment , log ] = createIncrement(); when the value 
// of the count was 0 the message variable does not change its value even when the increment function is called 
// three time and when the log function is called then the message gets printed If the message had been in the increment 
// function then the count in the message text would have increased. three times to 3.

// Below given is the code that could have lead to message being `count is 3`


// function createIncrement() {
//     let count = 0;
//     let message
//     function increment() {
//         count++;
//         message = `Count is ${count}`;

//     }
//     function log() {
//         console.log(message);
//     }
//     return[increment,log];
// }