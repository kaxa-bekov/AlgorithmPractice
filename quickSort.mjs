const quickSort = (arr) => {
    let less = [];
    let greater = [];
    let pivot = arr[0];
    // console.log(pivot)
   if(arr.length < 2){
        return arr;
   }else if(arr.length === 2){
        if(arr[0] > arr[1]){
            return [arr[1],arr[0]];
        }else{
            return arr;
        }
   }else if(arr.length > 2){
        for(let i = 0;i < arr.length;i++){
            if(arr[i] < pivot){
                less.push(arr[i]);
            }else if(arr[i] > pivot){
                greater.push(arr[i]);
            }
        }
        return [...quickSort(less),pivot,...quickSort(greater)];
   }
   return null;
}

const arrToSort = [2,5,23,5,54,45,3,4,1,9,90];


console.log(quickSort(arrToSort))
// console.log(quickSort(arrToSort).length);
// console.log(arrToSort.length);
export default quickSort