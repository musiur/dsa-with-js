const recursiveBinarySearch = (arr, target) => {
  return binarySearch(arr, target, 0, arr.length - 1);
};

const binarySearch = (arr, target, leftIndex, rightIndex) => {
    
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) {
    return `${middleIndex}`;
  }

 
  if (target < arr[middleIndex]) {
    return binarySearch(arr, target, leftIndex, middleIndex - 1);
  } else{
    return binarySearch(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 1));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 90));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], -10));
