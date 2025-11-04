// function twoSum(arr,target){
//     let map = {}
//     for (let i = 0; i < arr.length; i++) {
//         let comp = target - arr[i]
//         if (map[comp] !== undefined) {
//             return [map[comp],i]
//         }
//         map[arr[i]] = i
//     }
//     return []
// }

// console.log(twoSum([1,2,4],3))





const twosum = (array,target) => {
    let map = {}
    for (let i = 0; i < array.length; i++) {
        let comp = target - array[i]
        if (map[comp] !== undefined) {
            return [map[comp],i]
        }
        map[array[i]] = i
    }
    return []
}

console.log(twosum([1,2,7,8,3],9))

