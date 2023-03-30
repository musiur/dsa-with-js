// const n = 3;
// let result = 1;
// for(let i = 1; i <= n; i++){
//     result *= i;
// }

// console.log(result)

// O(n)

// recursive approach

const FactorialNumber = (number) => {
  let result = 1;
  let n = number;

  const factorial = (num) => {
    if (num < 2) {
      return;
    }
    result = result * num;
    factorial(num - 1);
  };

  factorial(n);

  return result;
};

console.log(FactorialNumber(1));
console.log(FactorialNumber(2));
console.log(FactorialNumber(3));
console.log(FactorialNumber(4));
console.log(FactorialNumber(5));
