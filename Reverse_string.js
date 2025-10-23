// Reverse a string

// Using Built In Function
// function reverse(str){
//     return str.split("").reverse().join("")
// }

// let str = 'yash'
// console.log(reverse(str))


// Without Built In Function
// function reverse(str){
//     let result = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         result =result + str[i];
//     }
//     return result
// }

// console.log(reverse('hello'))


function reverse(str){
    let result = ""
    for (let i = str.length-1; i >= 0 ; i--) {
        result = result + str[i]
    }
    return result
}

let str = 'hsay'
console.log(reverse(str))