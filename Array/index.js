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

// SORT EVEN AND ODD VALUE IN ARRAY EVEN IN START AND ODD AT END
function sortEvenOdd(arr) {
  let i = 0;
  let j = 0;

  while(i < arr.length){
    if(arr[i] % 2 === 0){
      let val = arr[i];
      arr[i] = arr[j];
      arr[j] = val;
      j++
    }
    i++;
  }
  return arr;
}
console.log(sortEvenOdd([3, 1, 2, 4]))