
//  Ek Promise banao jo 2 second baad "Hello Promise" return kare.

// const p1 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello Promise")
//     },2000)
// })

// p1.then((data)=>{
//     console.log(data)
// })



// 2

// const p2 =  new Promise((resolve,reject)=>{
//     let num = Math.floor(Math.random()*10)+1;
//     if(num%2===0)
//     {
//         resolve("Even")
//     }
//     else{
//         reject("Odd")
//     }
// })


// .then((data)=>{
//     console.log(data)
// })

// .catch((error)=>{
//     console.log(error)
// })


// 3


// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"vasu",age:20})
//     },3000)
//     })
// }

// fetchUser()
// .then((data)=>{
//     console.log(data)
// })


//4

// const p3 = new Promise((resolve,reject)=>{
//     resolve("Data Loaded")
// })

// .then((data)=>{
//     console.log(data)
// })



//5

// const p4 = new Promise((resolve,reject)=>{
//     reject("Error Aa Gaya")
// })

// .catch((error)=>{
//     console.log(error)
// })



//6

// function delay(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Done")
//         },ms);
//     })
// }

// delay(2000)
// .then((data)=>{
//     console.log(data)
// })



//7

// const p = new Promise((resolve,reject)=>{
//     let num = Math.random()
//     if(num>0.5)
//         resolve("success")
//     else
//         reject("failed")
// })

// .then((data)=>{
//     console.log(data)
// })

// .catch((error)=>{
//     console.log(error)
// })



//8


// function delay(ms){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, ms)
//     })
// }

// delay(1000)

// .then(()=>{
//     console.log("Step 1")

//     return delay(1000)
// })

// .then(()=>{
//     console.log("Step 2")

//     return delay(1000)
// })

// .then(()=>{
//     console.log("Step 3")
// })



//9

// const p1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         return resolve("Tea ready")
//     }, 2000);
// })
// const p2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         return resolve("Bread ready")
//     },3000)
// })
// const p3 = new Promise((resolve)=>{
//     setTimeout(() => {
//         return resolve("butter ready")
//     }, 1000);
// })

// Promise.all([p1,p2,p3])

// .then((data)=>{
//     console.log(data)
//     console.log("break fast is ready")
// })


//10

function fetchUser(){
    return new Promise((resolve)=>{
        resolve("vasu")
    })
}
function fetchPost(){
    return new Promise((resolve)=>{
        resolve("image")
    })
}

Promise.all([fetchUser(),fetchPost()])

.then((data)=>{
    console.log(data)
})