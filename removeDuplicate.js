// function remove(arr){
//     let unique = []

//     for (let num of arr) {
//         if (!unique.includes(num)) {
//             unique.push(num)
//         }
//     }
//     return unique
// }

// console.log(remove([1,2,3,3,4,4,5]))





const remove = (arr) => {
    if(arr.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arr[k] = arr[i]
            k++
        };
    };
    return k;
}

console.log(remove([1,1,2,2,3,4,5]))