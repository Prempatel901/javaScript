

// const users = fetch("https://api.github.com/user");

// const data = users.then((Response) => {
//  if(!Response.ok)
//         throw new Error("Data is not responsed")
//  return Response.json()
// })

// data.then((datas) => {
//     //console.log(Response)


//     const parent = document.getElementById("first")


//     for (let i = 0; i < datas.length; i++) {
//         const image = document.createElement('img')
//         image.src = datas[i].avatar_url;
//         image.style.height = "100px"
//         image.style.width = "100px"
//         parent.append(image)
//     }




// })

// data.catch((error)=>{
//     const parent =  document.getElementById('first')
//     parent.textContent = error.message;
// })


// const j1 = {
//     name: "vasu",
//     age: 21,
//     address: "bihar",
// }


// // convert in json


// const jsonFormat = JSON.stringify(j1)

// console.log(jsonFormat)





// const jsonFormat = `{
//     "name": "Vasu",
//     "age":21,
//     "Address": "Bihar"

// }`

// const JsObject = JSON.parse(jsonFormat)

// console.log(JsObject)





// Zomato Application



    const orderDitail = {
        orderid: 12345,
        customerName: "vasu",
        food: ["Pizz", "burger", "momos"],
        cost: 650,
        customerLocation: "patel nager",
        resturantLocation: "Chhabilapur"

    }

function orderpayment(orderDitail) {

    console.log(`${orderDitail.cost} Payment is in progress`)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(Math.random()>0.1){
        console.log("Payment is succefully ")
        orderDitail.status = true
        resolve(orderDitail);
        }else{
            reject("Payment is failed")
        }
    }, 3000);
    })
}


function orderPraper(item) {
    console.log(`Your food is preparing ${item.food}`)
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            if(Math.random()>0.05){

        console.log(`your food is ${item.food} prepared`)
        orderDitail.token = 123
        resolve(item)
            }else{
                reject("food item is not persent at restaurent")
            }
    }, 3000);
    })
    
}

function orderPickUp(item) {
    console.log("order pick up on the way ")
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        if(Math.random()>0.05){
        console.log(`order picked up from ${item.resturantLocation}`)
        orderDitail.received = true
        resolve(item)
        }else{
            reject("delivery boy Unable to reach  restaurent")
        }
    }, 3000)
   })
}


function orderDeliver(item) {
    console.log(`Your Order is on the way ${item.customerLocation} `)
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        console.log("order Succesfully delivered ")
        resolve(item)
    }, 3000)
   })
}

// orderpayment((orderDitail) => {
//     orderPraper(orderDitail, (orderDitail) => {
//         orderPickUp(orderDitail, (orderDitail) => {
//             orderDeliver(orderDitail)
//         })
//     })
// })

 orderpayment(orderDitail)
 .then((orderDitail)=>orderPraper(orderDitail))
 .then((orderDitail)=>orderPickUp(orderDitail))
 .then((orderDitail)=>orderDeliver(orderDitail))
 .then((orderDitail)=>{
    console.log(orderDitail)
 })
 .catch((error)=>{
    console.log("Error: ",error)
 }).
 finally(()=>{
    console.log("i am doing cleanup")
 })