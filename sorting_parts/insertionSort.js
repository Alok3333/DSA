// Insertion Sort
// In this sorting algorithm what we are doing. we are doing shift the element not swaped

let arr = [16, 15, 4, 13, 2, 1];

function insertionSort(arr) {
    let current, i, j;
    for(i = 1; i < arr.length; i++){
        current = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let result = insertionSort(arr);
console.log(result);