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
// function sortEvenOdd(arr) {
//   let i = 0;
//   let j = 0;

//   while(i < arr.length){
//     if(arr[i] % 2 === 0){
//       let val = arr[i];
//       arr[i] = arr[j];
//       arr[j] = val;
//       j++
//     }
//     i++;
//   }
//   return arr;
// }
// console.log(sortEvenOdd([3, 1, 2, 4]))

// REMOVE DUBLICATE IN ARRAY
// function removeDublicateInArray(arr) {
//     let i = 1;
//     let j = 1;
//     while(i < arr.length){
//         if(arr[i] !== arr[i-1]){
//            arr[j] = arr[i];
//             j++;
//         }
//         i++;
//     }
//     arr.length = j;
//     return arr;
// }
// console.log(removeDublicateInArray([1, 1, 2, 2, 3, 4, 4]))

// BEST TIME TO BUY AND SELL SHARES
let maxProfit = function(prices) {
    let i = 0;
    let j = 0;
    let profit = 0;
    while(i< prices.length){
        if(prices[j] > prices[i]){
            j=i;
        }else if(prices[i] - prices[j] > profit){
            profit = prices[i] - prices[j];
        }
        i++;
    }
    return profit;
};
console.log(maxProfit([7,1,5,3,6,4]))