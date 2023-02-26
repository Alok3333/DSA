// Heap Sort Algorithm
// The heap sort there is two heap (1 - Min-heap)(2 - Max-heap).
// So first fall we are converting the array to max-heap.
// We are checking max-heap.
// If it is max-heap then swap the lastNode to rootNode.
// After we will delete the lastNode.

let arr = [6, 14, 1, 3, 26, 8, 1];

function heapSort(arr) {
  let N = arr.length;
  let parentNode = Math.floor(N / 2 - 1);

  for (let i = parentNode; i >= 0; i--) {
    heapify(arr, N, i);
  }

  for (i = N - 1; i >= 0; i--) {
    let swap = arr[0];
    arr[0] = arr[i];
    arr[i] = swap;

    heapify(arr, i, 0);
  }
}

function heapify(arr, N, i) {
  let largest = i;
  let leftNode = 2 * i + 1;
  let rightNode = 2 * i + 2;

  if (leftNode < N && arr[largest] < arr[leftNode]) {
    largest = leftNode;
  }

  if (rightNode < N && arr[largest] < arr[rightNode]) {
    largest = rightNode;
  }

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, N, largest);
  }
}

heapSort(arr);
console.log(arr);
