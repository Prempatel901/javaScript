

// Zomato Application


function orderpayment(callback){
    const orderDitail = {
        orderid: 12345,
        customerName: "vasu",
        food: ["Pizz","burger","momos"],
        cost: 650,
        customerLocation: "patel nager",
        resturantLocation: "Chhabilapur"

    }
    console.log("Payment is panding")
    setTimeout(() => {
        console.log("Payment is succefully ")
        callback(orderDitail);
    }, 3000);
}


function orderPraper(item, callback){
    console.log(`Your food is preparing ${item.food}`)

    setTimeout(() => {
        console.log(`your food is ${item.food} prepared`)
        callback(item)
    }, 3000);
}

function orderPickUp(item,callback){
    console.log("order pick up on the way ")
    setTimeout(()=>{
        console.log(`order picked up from ${item.resturantLocation}`)
        callback(item)
    },3000)
}


function orderDeliver(item){
    console.log(`Your Order is on the way ${item.customerLocation} `)
    setTimeout(()=>{
        console.log("order Succesfully delivered ")
    },3000)
}

orderpayment((orderDitail)=>{
    orderPraper(orderDitail,(orderDitail)=>{
        orderPickUp(orderDitail,(orderDitail)=>{
            orderDeliver(orderDitail)
        })
    })
})






// const p1  = new Promise((resolve,reject)=>{
//     reject("hello")
// })

// p1.then((response)=> console.log(response))
// .catch((error)=>console.log(error))