const array = [2, 3, 4, 5, 6, 7];
let arr = array;

const target = 3;
let n = arr.length;
while (n !== 1) {
  n = Math.floor(n / 2);
  console.log(n)
  
  
  if (target === arr[n]) {
    console.log("yes", n, arr[n])
    return arr[n];
  } else if (target > arr[n]) {
    const arrRight = arr.slice(n + 1, arr.length);
    console.log(arrRight)
    if (arrRight.length > 1) {
      arr = arrRight;
      n = arrRight.length;
    } else {
      return arrRight[0];
    }
  } else {
    const arrLeft = arr.slice(0, n);arr = arrLeft;
    if (arrLeft.length > 1) {
      n = arrLeft.length;
    } else {
      return arrLeft[0];
    }
  }

  console.log(n, arr);
}

// O(n)
