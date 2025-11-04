const reverse = (str) => {
    let result = ''
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverse('yash'))


const reverseArray = (arr) => {
    let left = 0 , right = arr.length - 1
    while (left<right) {
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr
}

console.log(reverseArray([1,2,3,4]))


const remove = (arr) => {
    if (arr.length === 0) return 0
    let k = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arr[k] = arr[i]
            k++
        }

    }
    return k
}

console.log(remove([1,2,2,3,4]))


const pattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let  s= 0; s < n-i; s++) {
            line = line + ' '
        }

        for (let k = 0; k < 2*i-1; k++) {
              line = line + '*'
        }
        console.log(line)
    }
}

pattern(5)


const isPalindrome = (str) => {
    let left = 0 , right = str.length-1
    while (left<right) {
        if (str[left] !== str[right]) return false
        right--
        left++
    }
    return true
}

console.log(isPalindrome("poop"))

const fibonacci = (n) => {
    let term = []
    if (n <= 0) return term
    if (n >= 1) term.push(0)
    if (n >= 2) term.push(1)
    
    for (let i = 2; i < n; i++) {
        term.push(term[i-1]+term[i-2])
    }
    return term

}

console.log(fibonacci(4))