const arr = [2,3,4,5,6,7];

const target = 50;

for(let i = 0; i < arr.length; i++){
    if(target === arr[i]){
        console.log(i);
        return;
    }
}

console.log(-1)

// O(n)