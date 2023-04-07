function findPair(arr, n){
       arr.sort((a, b) => {return a-b} );
       let i = 0;
       let j = 1;
       while(i<arr.length && j<arr.length){
           if(i != j && arr[j] - arr[i] == n){
               return 1;
           }else if(arr[j] - arr[i] < n){
               j++;
           }else {
               i++;
           }
       }
       return 0;
    }

console.log(findPair([-10, 20] , 30)) // true