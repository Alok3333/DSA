// If the same element an array how to get the index number of those same two element.
// Let's see...

let arr = [2, 6, 4, 3, 1, 4];

let target = 4;
let arr2 = [];

function LSR(arr, target, index) {
  if (index == arr.length) {
    return;
  }

  if (target == arr[index]) {
    arr2.push(index);
  }
  LSR(arr, target, index + 1);
}

LSR(arr, target, 0);
console.log(arr2);
