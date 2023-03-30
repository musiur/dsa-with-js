const n = 16;

for(let i = 0; i < n; i++){
    if(n === Math.pow(2, i)){
        console.log(true);
        return;
    }
}

console.log(false);

// O(n)
