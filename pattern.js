const pyramid = (n) => {
    for (let i = 1; i <= n; i++) {
        let line = ''

        for (let s = 0; s < n-i; s++) {
        line = line + ' '
        }

        for (let k = 0; k < 2*i-1; k++) {
        line = line + '*'
        }
        console.log(line)
    }
}

pyramid(5)
