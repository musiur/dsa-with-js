// normal approach

// const n = 8;
// let arr = [0]

// for(let i = 0; i < n; i++){
//     if(arr.length === 1){
//         arr.push(1);
//     }else{
//         arr.push(arr[i] + arr[i-1]);
//     }

//     if(arr.length === n){
//         break;
//     }
// }

// console.log(arr)

// // O(n-1) ~ O(n)

// recursive approach
const NthFibonacciNumbers = (num) => {
  if (num === 0 || num === 1) {
    return 0;
  } else if(num === 2){
    return 1
  }else {
    let fibArr = [0, 1];
    const fibFunc = (n, arr, l) => {
      if (n > 2) {
        if (fibArr.length === l) {
          return;
        }

        fibArr.push(arr[arr.length - 2] + arr[arr.length - 1]);

        let arrToPass = [fibArr[fibArr.length - 2], fibArr[fibArr.length - 1]];

        if (n - 1 > 2) {
          fibFunc(n - 1, arrToPass, l);
        }
      }
    };

    fibFunc(num, fibArr, num);

    return fibArr[fibArr.length - 1];
  }
};

console.log(NthFibonacciNumbers(5));
console.log(NthFibonacciNumbers(0));
console.log(NthFibonacciNumbers(7));
