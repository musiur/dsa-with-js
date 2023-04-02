const BubbleSort = (arr) => {

    // looping upto arr.length
    for(let i = 0; i < arr.length; i++){

        // looping upto arr.length
        for(let j = 0; j < arr.length; j++){

            // swaping if unordered
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr; // sorted array
}

console.log(BubbleSort([-6, 20, 8, -2, 4, -9]))

// time complexity O(n^2)