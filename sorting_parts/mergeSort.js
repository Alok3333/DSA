// Merge Sort Algorithm
// We are dividing and conquer an array.
// We will divide the element whenever you will not get single element, if you got single element.
// We will do conquer operation and merge the array element.
// Whenever this process will complete then you can see sorted array.

let nums = [23, 19, 2, 10, 3, 1];

let start = 0;
let end = nums.length - 1;

function mergeSort(nums, start, end) {
  // base case
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);
    return merge(nums, start, mid, end);
  }
}

function merge(nums, start, mid, end) {
  let arr = [];
  (i = start), (j = mid + 1), (k = start);

  while (i <= mid && j <= end) {
    if (nums[i] <= nums[j]) {
      arr[k] = nums[i];
      k++;
      i++;
    } else {
      arr[k] = nums[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    arr[k] = nums[i];
    k++;
    i++;
  }

  while (j <= end) {
    arr[k] = nums[j];
    k++;
    j++;
  }

  for (i = start; i <= end; i++) {
    nums[i] = arr[i];
  }
  return nums;
}

let result = mergeSort(nums, start, end);
console.log(result);
