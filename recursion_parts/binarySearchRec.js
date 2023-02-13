// Binary Search with Recursion (BSR)

let arr = [3, 6, 10, 13, 18, 28, 36, 39, 44, 49, 50];

let target = 50;

function BSR(arr, start, end) {
  // Base case
  if (start > end) {
    return -1;
  }

  // finding middle element
  let mid = Math.floor(start + (end - start) / 2);

  if (target === arr[mid]) {
    return mid;
  }

  if (arr[mid] < target) {
    return BSR(arr, mid + 1, end);
  } else {
    return BSR(arr, start, mid - 1);
  }
}

let result = BSR(arr, 0, arr.length - 1);
console.log(result);
