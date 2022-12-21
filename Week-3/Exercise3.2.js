const car1 = {
    brand:'BMW',
    model:'X6',
    make:2022
}

const car2 = {
    brand:'Mercedes',
    model:'Mayback 230',
    make:2021
}

const car3 = {
    brand:'Audi',
    model:'A8 Long Base version',
    make:2020
}

// Now call, apply, bind function are basically used to change the context of the invoked function
// which basiclly means with the help of these function we can change the `this` for a particular function
// when invoking

// Here call function is used and result will be different for different objects called at the time of invocation


function SellCar(...bids){
    let carToBeSold = `The car today being sold is ${this.brand} ${this.model} made in ${this.make}`
    console.log(carToBeSold);
    if(bids.length > 0){
        console.log('Available bids for the car is ')
        for(const bid of bids){
            console.log("$"+bid);
        }
    }else{
        console.log('There are no bids for this car')
    }
}

SellCar.call(car3, 3400);
// OUTPUT
// The car today being sold is Audi A8 Long Base version made in 2020
// Available bids for the car is 
// $3400

SellCar.call(car2, 3700, 5200);
// OUTPUT
// The car today being sold is Mercedes Mayback 230 made in 2021
// Available bids for the car is
// $3700
// $5200

SellCar.call(car1);
// OUTPUT
// The car today being sold is BMW X6 made in 2022
// There are no bids for this car


// Appy function is also similar to call function, the only difference is how the arguments are passed into the function
// at the time of invocation, here the arguments are passed in the form of an array 

function SellCarApply(bid1, bid2){
    let carToBeSold = `The car today being sold is ${this.brand} ${this.model} made in ${this.make}`
    console.log(carToBeSold);
    console.log(`Available bids for the car are ${bid1} and ${bid2} `);
}

SellCarApply.apply(car1, [2300, 5400]);
// The car today being sold is BMW X6 made in 2022
// Available bids for the car are 2300 and 5400 

SellCarApply.apply(car2, [2800, 7800]);
// The car today being sold is Mercedes Mayback 230 made in 2021
// Available bids for the car are 2800 and 7800




// Now bind function is similar to call function the difference here is that `func.bind` does not call the function but 
// it returns a function that need to be invoked

function detailsCar(odoReading, color, type){
    console.log(`The car today we have is ${this.brand} ${this.model} made in ${this.make}`);
    console.log(`It has been driven ${odoReading}km and it is a ${type} car ${color} in color`)
}


let carDetail1 = detailsCar.bind(car1, 45000, 'red', 'petrol');

let carDetail2 = detailsCar.bind(car1, 5000, 'white', 'diesel');

let carDetail3 = detailsCar.bind(car1, 67000, 'black', 'petrol');

carDetail1();
// The car today we have is BMW X6 made in 2022
// It has been driven 45000km and it is a petrol car red in color

carDetail2();
// The car today we have is BMW X6 made in 2022
// It has been driven 5000km and it is a diesel car white in color

carDetail3();
// The car today we have is BMW X6 made in 2022
// It has been driven 67000km and it is a petrol car black in color
