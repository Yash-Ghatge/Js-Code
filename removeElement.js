const remove = (arr,val) => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[k] = arr[i]
            k++
        };
    };
    return k;
}

console.log(remove([1,1,2,2,3,4,5],2))