const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  
  while(rightIndex - leftIndex !== -1){
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if(arr[middleIndex] === target){
      return middleIndex;
    }else if(arr[leftIndex] === target){
      return leftIndex;
    }else if(arr[rightIndex] === target){
      return rightIndex;
    }else{
      if(arr[middleIndex] > target){
        rightIndex = middleIndex - 1;
        if(rightIndex <= -1){
          return -1;
        }
      }else if(arr[middleIndex] < target){
        leftIndex = middleIndex + 1;
        if(leftIndex >= arr.length){
          return -1;
        }
      }else{
        return -1;
      }
    }
  }
}

console.log(binarySearch([1,2,3,4,5,6], 1))
console.log(binarySearch([1,2,3,4,5,6], 2))
console.log(binarySearch([1,2,3,4,5,6], 3))
console.log(binarySearch([1,2,3,4,5,6], 4))
console.log(binarySearch([1,2,3,4,5,6], 5))
console.log(binarySearch([1,2,3,4,5,6], 6))
console.log(binarySearch([1,2,3,4,5,6], 90))
console.log(binarySearch([1,2,3,4,5,6], -10))