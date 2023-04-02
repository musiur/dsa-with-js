const insertionSort = (arr) => {
    
    // looping arr.length times
    for(let i = 0; i < arr.length; i++){

        // looping until a swaping
        for(let j = i + 1; j >= 0; j--){

            // swaping if inordered
            if(arr[j] < arr[j - 1]){
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }else{
                break; // if no swap then, break
            }
        }

    }

    return arr; // return sorted array
}
console.log(insertionSort([2, -6, -4, -1, 8]));
// console.log(insertionSort([2, -6, -4, -1, 8]));

// time complexity of this program is O(n^2)