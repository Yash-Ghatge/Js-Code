function fibonacci(n){
    let term = [];
    if(n <= 0) return term;
    if(n >= 1) term.push(0)
    if(n >= 2) term.push(1)

    for (let i = 2; i < n; i++){
        term.push(term[i-1] + term[i-2]) 
    }
    return term
}

console.log(fibonacci(6))