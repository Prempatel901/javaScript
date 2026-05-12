//  this call apply bind
// this: class object method
// strict mode vs non strict mode
// 'use strict'
// global Object: In window it is called window, in node js, It is called global


// var a = 10
// var b = 20

// console.log(a,b)


// function greet(name1,name2){
//     console.log(name1,name2)
// }

// greet("rohit","mohit")


// const user = {
//     name: "vasu",
//     greet: ()=>{
//         console.log(this)
//     }
// }

// user.greet()

// console.log(window)

// 'use strict'

// function greet(){
//     console.log(this)
// }

// greet()

// this keyword: Global scope in Node Js:{}
// Windows: window Object
// function: this Keyword , if someone invoke the method or function, this will point
// Normal function: When no one is invoking it ,
// Non strict: Global Object for node and browser
// strict mode: Undefined 

// Arrow function: It takes this from its lexical enoviroment scope

// 'use strict'

// const btn =  document.getElementById("btn")

// btn.addEventListener("click",function(){
//     console.log(this)
// })