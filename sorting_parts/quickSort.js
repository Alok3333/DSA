// Quick Sort Algorithm
// In this quick sort algorithm we are partition the array element.
// In the partition we are doing we are selecting the pivot element.
// How we can select pivot element so in this algorithm we are selecting the pivot element as middle element
// After we are checking (arr[i] < pivot) and (arr[j] > pivot)
// Swap the element and divided into two parts

let nums = [
  9, 2, 20, 1, 33, 25, 15, 21, 30, 90, 2, 2, 2, 100, 50, 60, 20, -2, -1, -10, 0,
];

let start = 0;
let end = nums.length - 1;

function quickSort(nums, start, end) {
  if (start < end) {
    index = partition(nums, start, end);
    if (start < index - 1) {
      quickSort(nums, start, index - 1);
    }
    if (index < end) {
      quickSort(nums, index, end);
    }
  }
  return nums;
}

function partition(nums, start, end) {
  let mid = Math.floor(start + (end - start) / 2);
  let pivot = nums[mid];
  (i = start), (j = end);

  while (i <= j) {
    while (nums[i] < pivot) {
      i++;
    }
    while (nums[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  return i;
}

let result = quickSort(nums, start, end);
console.log(result);
