const QuickSort = (arr) => {
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      // asenc
      // if(arr[0] < arr[1]){ // desnc
      return [arr[0], arr[1]]; // asenc
      // return [arr[1], arr[0]]; // desnc
    } else {
      return arr;
    }
  } else {
    let middleIndex = Math.floor(arr.length / 2);

    let pivot = arr[middleIndex];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== pivot) {
        if (arr[i] < pivot) {
          // asenc
          // if(arr[i] < pivot){ // desnc
          leftArr.push(arr[i]);
        } else {
          rightArr.push(arr[i]);
        }
      }
    }
    // if left arr need to sort
    if (leftArr.length >= 2) {
      leftArr = QuickSort(leftArr);
    }
    // if right arr need to sort
    if (rightArr.length >= 2) {
      rightArr = QuickSort(rightArr);
    }

    return [...leftArr, pivot, ...rightArr]; // sorted array
  }
};

console.log(QuickSort([-1, -6, 10, 8, 9, -2, 4, -10]));

// output [-6, -10, -2, -1, 4,   8,  9, 10]
