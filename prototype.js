// const obj = {
//     name: "vasu",
//     age: 21,
//     greet: function(){
//         console.log("Hello Ji")
//     }
// };


// console.log(obj.name)
// obj.greet()

// console.log(obj.hasOwnProperty("name"))
// console.log(obj.toString())

// const arr = [ 10,20,30]

// console.log(arr.length)

// const obj2 = {
//     account: 20
// }

// obj2.__proto__ = obj

// console.log(obj2.hasOwnProperty("name"))



// const obj1  = {
//     name: "vasu",
//     age: 21,
//     greet: function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// const obj2  = {
//     name: "mantu",
//     age: 21,
//     greet: function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// const obj3  = {
//     name: "prem",
//     age: 21,
//     greet: function(){
//         console.log(`Hello ${this.name}`)
//     }
// }



// class Person{
    
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }

//     sayHi(){
//         console.log(`HI ${this.name}`)
//     }
// }


// const person1 = new Person("Rohit",10)
// const person2 = new Person("vasu",21)

// const obj1 = {
//     name: "mohan",
//     age: 39,
//     greet: function(){
//         console.log("hello jI")
//     }
// }

// console.log(obj1)


// class game{
//     constructor(name,score){
//         this.name = name;
//         this.score = score;
//     }
//     congra(){
//         console.log(`congratuletion ${this.name} your score: ${this.score}`)
//     }
// }

// const player1 = new game("vasu",89)
// const player2 = new game("mohit",28)
// console.log(player2.congra())


class bank {
    constructor(name,age,account,balance)
    {
        this.name = name;
        this.age = age;
        this.account = account;
        this.balance = balance;
    }
}

const costu = new bank("vasu",20,109,50.3)

costu.name = "prem"

console.log(costu)

