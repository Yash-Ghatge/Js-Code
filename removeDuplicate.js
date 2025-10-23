function remove(arr){
    let unique = []

    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num)
        }
    }
    return unique
}

console.log(remove([1,2,3,3,4,4,5]))





