
const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;

    for(let i = 1;i < arr.length;i++){
        if(arr[i] < smallest){
            smallest = arr[i]
            smallest_index = i;
        }
    }
    return smallest_index;
}

const array = [2,5,9,2,67,43,67,56,9,23,1,3,745,3,5];

// console.log(findSmallest(array));

 const selectionSort = (arr) => {
    const sortedArr = [];
    let smallest;
    for(let i = arr.length - 1;i >= 0;i--){
        smallest = findSmallest(arr);
        let [ insertable ] = arr.splice(smallest,1);
        console.log(insertable);
        sortedArr.push(insertable)
    }
    return sortedArr;
}


console.log(selectionSort(array));
