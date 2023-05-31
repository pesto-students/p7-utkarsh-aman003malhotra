function doTask1(){
    setTimeout(() => {
        console.log('task 1 completed')
    },1000);
}

function doTask2(){
    setTimeout(() => {
        console.log('task 2 completed')
    },3000);
}

function doTask3(){
    setTimeout(() => {
        console.log('task 3 completed')
    },2000);
}

async function funcAsyncAwait(func1, func2, func3){
    await func1();
    await func2();
    await func3();
}

function* funcgenerator(func1, func2, func3){
    yield func1();
    yield func2();
    yield func3();
    return;
}

const instanceFuncGenerator = funcgenerator(doTask1, doTask2, doTask3);

while(!instanceFuncGenerator.next().done){
    instanceFuncGenerator.next();
}

funcAsyncAwait(doTask1, doTask2, doTask3);
