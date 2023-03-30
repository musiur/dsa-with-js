const n = 6;

let isPrime = true;

if(n > 1){
    for(let i = 2; i <= n; i++){
        if(n % i === 0 && i !== n){
            isPrime = false;
            break;
        }
    }
}else{
    isPrime = false;
}
console.log(isPrime ? "Prime number" : "Not a prime number")

// O(n)