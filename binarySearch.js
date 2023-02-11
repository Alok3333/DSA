// Basically we will search the target element also in binarySearch but there is diffrence of the Time Complexity if you know
// the time complexity then you might be understand
// if element is present an array then return the index number of this element otherwise return -1
// Binary Search will not search the element sequentially
// The binary search array always should be sorted.

// Let's see the code

let nums = [-2, 1, 19, 20, 25, 34, 44, 50];

let target = 100;

function binarySearch(nums, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let result = binarySearch(nums, 0, nums.length - 1);
console.log(result);
