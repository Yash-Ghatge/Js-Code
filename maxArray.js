// Using Built in Function
// function Maxarr(arr){
//     return Math.max(...arr)
// }

// let arr = [21,3,4,6,92]
// console.log(Maxarr(arr))


function findMax(arr){
    let max = arr[0]
    for(let num of arr){
        if(num>max){
            max = num
        }
    }
    return max
}

let arr = [21,3,4,6,92]
console.log(findMax(arr))
