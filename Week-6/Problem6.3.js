function sortArr(nums) {
    let l = 0;
    let m = 0;
    let h = nums.length-1;

    while(m<=h){
        if(nums[m] == 0){
            let temp1 = nums[m];
            nums[m]= nums[l];
            nums[l] = temp1;
            l++;
            m++;
        }else if(nums[m] == 2){
            let temp2 = nums[m];
            nums[m]= nums[h];
            nums[h] = temp2;
            h--;
        }else{
            m++;
        }
    }
    return nums;
}

console.log(sortArr([0 ,2, 1, 2, 0]));