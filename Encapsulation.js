// Encapsulation means Wrapping data and methods together into one class

class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    displayInfo(){
        console.log(`name : ${this.name} , age : ${this.age}`)
    }
}

const yash = new Student('yash',21)
yash.displayInfo()