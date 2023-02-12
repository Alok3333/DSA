// Linear search by the help of recursion.

let arr = [23, 1, 56, 3, 32, 44, 39, 47, 80];

let target = 47;

function LSR(arr, target, index) {
  if (index == arr.length) {
    return -1;
  }

  if(target === arr[index]){
    return index;
  } else {
    return LSR(arr, target, index + 1);
  }
}

let result = LSR(arr, target, 0);
console.log(result);
