function threeSumClosest(nums, target) {
    var closestSum = Infinity;
    nums.sort((a, b) => a - b);
  
    for (var i = 0; i < nums.length - 2; i++) {
      var left = i + 1;
      var right = nums.length - 1;
  
      while (left < right) {
        var sum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        }
        else {
          right--;
        }
      }
    }
    return closestSum;
  }
  

console.log(threeSumClosest([-1, 2, 1, -4], 1));