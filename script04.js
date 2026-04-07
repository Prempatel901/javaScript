
// Objects
// key value

// const user ={
//     name: "Rahul",
//     age: 20,
//     emailId: "rahul@gmail.com",
//     amount: 3400,
//     "home address": "bihar"
// }


// console.log(user["name"])
// console.log(user.age)
// console.log(user["age"])
// console.log(user["home address"])

// update
// user.amount = 5000;
// console.log(user)

// delete  
// delete user.emailId;
// console.log(user)


// const user2 =user;
// user2.age =90;

// console.log(user)


//Important=========----------------------

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let keys in user){
//     console.log(keys,user[keys])
// }

// const name =  user.name
// console.log(name)


// object ko destructing karna
// const {name: username,age: userage} =user;

// const arr=[10,30,40,50,22]
// const [frist,second] = arr;

// console.log(username, userage)
// console.log(frist,second)


// const temp = Object.keys(user)
// console.log(temp)

// for(let keys of Object.keys(user)){
//     console.log(keys)
// }


// const obj = Object.values(user)
// console.log(obj)

// for(let [keys,value] of Object.entries(user)){
//     console.log(keys,value)
// }



// const user ={
//     name: "Rahul",
//     age: 20,
//     emailId: "rahul@gmail.com",
//     amount: 3400,
//     greeting: function(){
//         console.log(`Strike is coming on 18 october ${this.name}`);
//         return 20;
//     }
// }





// const value = user.greeting()
// console.log(value)










// const user ={
//     name: "Rahul",
//     age: 20,
//     emailId: "rahul@gmail.com",
//     amount: 3400,
//     address: {
//         city: "patna",
//         state: "bihar"
//     }
// }



// shallow copy------------------
// const user2 = {...user};
// //user2.name = "mohan"
// user2.address.city = "Gaya"
// console.log(user2)


// console.log(user)

// // console.log(user.address.city)


// const user2 = structuredClone(user)
// user2.address.city = "Gaya"
// console.log(user2)






const sym = Symbol("id");

const user = {
    name: "rohit",
    age: 20,
    0: 100,
    2: "mohit",
    [sym]: "hello ji"
}

const arr = [10,12,30,40,50]

{

}

console.log(user[sym])