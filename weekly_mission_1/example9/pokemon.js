
//crea una clase llamada pokemon y un constructor que reciba un nombre
class Pokemon {
    constructor (name) {
      this.name = name
    }
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
      }
    
    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
      }
}

 

module.exports = Pokemon
