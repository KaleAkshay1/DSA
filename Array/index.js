// FIND SECOND LARGE

// function findSecondLarg(arr) {
//  let large = -Infinity;
//  let secondLarge = -Infinity;

//  for(let i=0; i < arr.length; i++){
//     if(arr[i] > large){
//         secondLarge = large;
//         large = arr[i];
//     }else if(arr[i] > secondLarge && large !== arr[i]){
//         secondLarge = arr[i];
//     }
//  }
//  return secondLarge;
// }

// console.log(findSecondLarg([-10, -5, -20, -2]))

// SHIFT ALL 0 TO END OF Array
// function shiftAllZeroToEnd(arr){
//     let k = 0;
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] !== 0){
//             let val = arr[i]
//             arr[i]=arr[k]
//             arr[k]=val;
//             k++
//         }
//     }
//     return arr;
// }
// console.log(shiftAllZeroToEnd([0,1,0,3,12]))
