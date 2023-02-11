// Basically we will search the target element
// if element is present an array then return the index number of this element otherwise return -1
// Linear search will search the element sequentially

let nums = [2, 44, 19, 20, 34, 25, 50];

let target = 2;

function linearSearch(nums) {
    for(let i = 0; i < nums.length; i++){
        if(target === nums[i]){
            return i;
        }
    }
    return -1;
}

let result = linearSearch(nums)
console.log(result);