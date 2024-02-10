import quickSort from "./quickSort.mjs";

//Recursive binary search

const binarySearch = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.trunc((min + max)/2);

    console.log('entered the binary with ' + arr)
    console.log('Mid is ' + arr[mid]);
    console.log('Val is ' + val);

    if(arr[mid] === val){
        
        return arr[mid];
    }
    if(arr[mid] < val){
        return binarySearch(arr.slice(mid + 1),val);
        // min = mid + 1;
    }else if(arr[mid] > val){
        return binarySearch(arr.slice(0,mid),val);
        // max = mid - 1;
    }
    return null;
}

const simpleSearch = (arr, val) => {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return arr[i];
        }
    }
    return null;
}

const testArr = []

for (let i = 0; i < 1000; i++){
    testArr.push(i);
}

console.log(testArr.length);

//Unsorted array, binary search will not work
const array = [23,54,65,4,1,6,34,564,32,7,8,9,21,890,326,342,543,2346,9065];

let sortedArr = quickSort(array);

const value = 890;








console.time('search');
console.log('Binary Search is done: ' + binarySearch(sortedArr, value));
console.log('Simple Search is done: ' + simpleSearch(sortedArr, value) );
console.timeEnd('search');


// const v8 = require('v8');

// const heapStatistics = v8.getHeapStatistics();
// const heapSize = heapStatistics.heap_size_limit /(1024*1024);
// console.log(heapSize);

// const arraySIze = 1000000000;
// const elementSize = 8;

// const totalMemoryUsageBytes = arraySIze * elementSize;
// const totalMemoryUsageMegaBytes = totalMemoryUsageBytes/(1024*1024);
// console.log(totalMemoryUsageMegaBytes);
// console.log(Math.pow(2, 64));
