// const bubbleSort = (arr) => {
//     let counter = 0;
//     let leftIndex = 0;
//     let rightIndex = 1;

//     // looping until sorted
//     while(counter !== arr.length - 1){

//         // end of the array and starting loop again from start
//         if(rightIndex <= arr.length - 1){

//             // swaping values if misordered
//             if(arr[leftIndex] > arr[rightIndex]){
//                 let temp = arr[leftIndex];
//                 arr[leftIndex] = arr[rightIndex];
//                 arr[rightIndex] = temp;

//                 // index increment after swaping to check next two values
//                 leftIndex += 2;
//                 rightIndex += 2;
//                 counter = 0;
//             }else{

//                 // index increment after not swaping
//                 leftIndex += 1;
//                 rightIndex += 1;
//                 counter++;
//             }
//         }else{

//             // restarting loop with initial index values
//             leftIndex = 0;
//             rightIndex = 1;
//             counter = 0;
//         }
//     }

//     return arr; // returning sorted acending array
// }

const bubbleSort = (arr) => {
  let leftIndex = 0;
  let rightIndex = 1;

  // looping arr.length times
  for (let i = 0; i < arr.length; i++) {
    // looping arr.length - 1 times
    for (let j = 0; j < arr.length - i; j++) {
      // swaping values that are inordered
      if (arr[leftIndex] > arr[rightIndex]) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
      }

      // incrementing/initilizing the indexes
      if (rightIndex < arr.length - 1) {
        leftIndex += 1;
        rightIndex += 1;
      } else {
        leftIndex = 0;
        rightIndex = 1;
      }
    }
  }

  return arr; // returning sorted array
};

console.log(bubbleSort([2, -6, -4, -1, 8]));
console.log(bubbleSort([-6, 20, 0, 2, -1, 8]));

// Time Complexity of this program is O(n^2)
