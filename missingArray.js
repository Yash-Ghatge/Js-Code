// function miss(arr,n){
//     let total = (n*(n+1)) / 2
//     let sum = arr.reduce((a,b)=>a+b,0)
//     return total-sum
// }

// console.log(miss([1,2,3,4,6,7],7))



function miss(arr,n){
    let total = (n*(n+1))/2
    let sum = arr.reduce((a,b)=>a+b,0)
    return total-sum
}

console.log(miss([1,2,3,5,6],6))