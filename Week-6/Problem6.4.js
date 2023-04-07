function maxProfit(prices) {
    let max = -Infinity;
    let min = Infinity;
    let profit = 0;
    for(let i = 0; i< prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
            max = -Infinity;
        }
        if (prices[i] > max){
            max = prices[i];
        }
        let currentProfit= max-min;
        if(max != -Infinity && min != Infinity){
            if(currentProfit > profit)
            profit = currentProfit;
        }
    }
    return profit;
}

console.log(maxProfit([7,6,4,3,1]));