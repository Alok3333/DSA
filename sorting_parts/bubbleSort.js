// Bubble Sort
// In the help of we sorted the array element
// In this Bubble sort we are checking current element < previous element
// If it is (greater than) to (previous element) then swap the element

let nums = [5, 10, 2, 25, 18, 1, 9, 13];

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let swap = nums[j];
        nums[j] = nums[i];
        nums[i] = swap;
      }
    }
  }
  return nums;
}

let result = bubbleSort(nums);
console.log(result);
