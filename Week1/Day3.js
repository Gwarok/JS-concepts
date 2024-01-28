function fibonacci_sequence(n) {
    let fib=[0, 1]
    for(let i=2; i<n; i++){
        fib[i]=(i-1) + (i-2)
    }
    return fib
}
console.log(fibonacci_sequence(8))