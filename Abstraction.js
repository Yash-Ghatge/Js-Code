// Abstraction mens hidding complex details and showing only importent details to users

class Car{
    start(){
        this._engineStart()
        console.log('Car has started')
    }

    _engineStart(){
        console.log('engine is warming up ...')
    }
}

const c = new Car()
c.start()