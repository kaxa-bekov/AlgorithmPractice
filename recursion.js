// Recursive factorial
const fact = (x) => {
    if(x === 1){
        return 1;
    }else{
        return x * fact(x-1);
    }
}

const x = 50;
// console.log(fact(x)); 

// Recursive array sum
const arrSum = (arr) => {
    let sum = 0;

    if(arr.length === 0){
        return 0;
    }else if(arr.length === 1){
        return arr[0]
    }else{
        sum = arr[0] + arrSum(arr.slice(1));
        return sum
    }
}

const arr = [34,2,5]
// console.log(arrSum(arr));

let numberOfElements = 0;
const arrToMeasure = [2,3,5,2,8,9,12,34,54,65,34,23,5,4,34,2,1,43,6,5,32,2,12,43,53,2,3,12,76,45,434,3,56,6,45,456,434,5456,654,434,];
//Recursive array length ( without modifying the original array )
const measureArray = (arr) => {
    if(arr[1] === undefined){
        return 1;
    }else{
        numberOfElements = 1 + measureArray(arr.slice(0,-1));
        return numberOfElements;
    }
}
// console.log(measureArray(arrToMeasure));
// console.log(arrToMeasure.length);





const arrToMax = [1,5,13,15,34,2,56,23,54,23,1,59];


// Recursive get Maximum of an array
const getMaximum = (arr) => {
    let maxOfRemain = 0;
    if(arr.length === 0){
        return null;
    }else if(arr.length === 1){
        return arr[0];
    }else if(arr.length === 2){
        if(arr[0] > arr[1]){
            return arr[0];
        }else{
            return arr[1];
        }
    }else{
        maxOfRemain = getMaximum(arr.slice(1));
        if(arr[0] > maxOfRemain){
            return arr[0];
        }else{
            return maxOfRemain;
        }
    } 
}

// console.log(getMaximum(arrToMax));

//Recursive fibonachi
const fib = (x) => {
    if(x === 0){
        return null;
    }else if(x === 1){
        return 0;
    }else if(x === 2 || x === 3){
        return 1;
    }else{
        return fib(x-2) + fib(x-1);
    }
}

const fibSq = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377];

// console.log(fib(20))
