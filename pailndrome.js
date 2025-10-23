// Using Built In Function
// function palindrome(str){
//     result = str.split("").reverse().join("")
//     if(result === str){
//         console.log('Pailndrome')
//     }
//     else{
//         console.log('Not Pailndrome')
//     }
// }

// let str = 'npop'
// palindrome(str)


// Without using built in function (But in my style)
// function palindrome(str){
//     let result = ""
//     for (let i = str.length-1; i >= 0; i--) {
//         result = result + str[i]; 
//     }
//     if(result === str){
//         console.log('Pailndrome')
//     }
//     else{
//         console.log('Not Pailndrome')
//     }
// }

// let str = 'pop'
// palindrome(str)

// function isPalindrome(str){
//     let left = 0 , right = str.length-1
//     while(left<right){
//         if(str[left] !== str[right]) return false
//         right--
//         left++
//     }
//     return true
// }

// console.log(isPalindrome('poop'))
// console.log(isPalindrome('yash'))

function isPalindrome(str){
    let left = 0 , right = str.length-1
    while(left<right){
        if (str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}


console.log(isPalindrome("poopr"))

