function fibonacci_sequence(n) {
    let fib=[0, 1]
    for(let i=2; i<n; i++){
        fib[i]=(i-1) + (i-2)
    }
    return fib
}
console.log(fibonacci_sequence(5))
// @FACTORUALS
const factorial=  (n)=>{
    if (n<=2){
        return n
    }
    return n*factorial(n-1)
}
console.log(factorial(6))