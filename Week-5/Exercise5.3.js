const arr1 = [-1,3,4,6]

const arr2 = [3,4,6,8,4]

const hasDuplicate = (arr) => {
    return new Set(arr).size != arr.length
}


console.log(hasDuplicate(arr1))
console.log(hasDuplicate(arr2))