const PromiseState = {
    pending:"pending",
    rejected:"rejected",
    fulfilled:"fulfilled",
}

// promise polyfill 
class ThePromise{
    constructor(fn){
        this.PromiseState = PromiseState.pending;
        this.thenFunctions = [];
        this.catchFunction = null;
        this.resolvingData = null;
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        fn(this.resolve, this.reject);
    }

    resolve(resolvingData){
        if(!this.PromiseState === PromiseState.pending){
            return;
        }
        this.PromiseState = PromiseState.fulfilled;
        while(this.thenFunctions.length){
            const thenFunction = this.thenFunctions.shift();
            this.resolvingData = thenFunction(this.resolvingData || resolvingData);
        }
    }
    reject(rejectedData){
        if(this.PromiseState === PromiseState.pending ){
            this.catchFunction && this.catchFunction(rejectedData);
        }
        this.PromiseState = PromiseState.rejected;
    }
    then(thenFunction){
        this.thenFunctions.push(thenFunction);
        return this;
    }
    catch(catchFunction){
        this.catchFunction = catchFunction;
        return this;
    }
}

const getNumber = () => {
    new ThePromise((resolve, reject) => {
        const randomNumber = parseInt(Math.random() * 100, 10);
        console.log(randomNumber);
        setTimeout(()=>{
            if(randomNumber%5 === 0){
                reject(randomNumber);
            }
            resolve(randomNumber);
        }, randomNumber * 10)
    })
}

incrementBy = (org,inc) => {
    return org+inc;
}

const currentPromise = new ThePromise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    console.log(randomNumber);
    setTimeout(()=>{
        if(randomNumber%5 === 0){
            reject(randomNumber);
        }else{
            resolve(randomNumber);
        }
    }, randomNumber * 10)
});
currentPromise
    .then((val) => {console.log("resolved", val)})
    .catch((val) => {console.log("rejected", val)})