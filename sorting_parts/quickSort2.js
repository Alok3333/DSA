let arr = [30, -10, 0, 8, 2, 1, -1, 6, 23, 12, 20, 15, 7, 5];

let start = 0;
let end = arr.length - 1;

function quickSort(arr, start, end) {
  if (start < end) {
    pi = partition(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi, end);
  }
  return arr;
}

function partition(arr, start, end) {
  let mid = Math.floor(start + (end - start) / 2);

  let pivot = arr[mid];
  (i = start), (j = end);

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}

let r = quickSort(arr, start, end);
console.log(r);
