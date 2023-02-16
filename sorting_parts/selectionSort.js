// selection sort
// In this algorithm we are selecting one element and searching an array list. which is smallest element
// in an array if we have founded then swap the element.

let arr = [16, 2, 10, 7, 3, 1, 5];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let swap = arr[min];
    arr[min] = arr[i];
    arr[i] = swap;
  }
  return arr;
}

let result = selectionSort(arr);
console.log(result);
