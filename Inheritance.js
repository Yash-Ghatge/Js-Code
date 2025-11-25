// child class Inherit properties and methods from parent class using extends keyword

class animal{
    eat(){
        console.log('animal is eating')
    }
}

class dog extends animal{
    bark(){
        console.log('dog is barking')
    }
}

const d = new dog()
d.eat()
d.bark()