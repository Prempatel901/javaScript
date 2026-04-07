// functions


// function addNum(...num){

//     let sum =0;
//     for(let n of num){
//         sum += n;

//     }
//     console.log(sum)
// }

// addNum(3,4,5,7,3,8,9,23,54)


// const arr =[10,20,30,40,50]
// const arr2 =[40,23,42,54]

// const[first, second] = arr

// console.log(first,second)

// const ans = [...arr,...arr2]
// console.log(ans)


// const addNum = function (num1,num2){
//     return num1+num2;
// }

// console.log(addNum(3,4))



// console.log(addNum(3,4))
// function addNum (num1,num2){
//     return num1+num2;
// }

// console.log(addNum(3,4))


// arrow function

// const addNum = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addNum(3,4))


// const addNum = (num1,num2)=> num1+num2;


// console.log(addNum(3,4))


// const addNum = ()=> console.log("hello");

// addNum()


// const addNum = (num1,num2)=> num1+num2;

// const squerNum = num => num*num;


// console.log(addNum(3,4))
// console.log(squerNum(4))


// const greeting = ()=>{
//     let user = {
//         name: "rohit",
//         age: 20,
//     }
//     return user
// }

// console.log(greeting())


// const greeting = ()=>({name:"rohit",age: 20})

// console.log(greeting())





// IIFE;


// (function greeting (){
//     console.log("helloJI")
// })()




// function greeting (){
//     console.log("Hello ji kaise ho")
// }

// function dance(){
//     console.log("i am dancing")
// }

// function meet(calback){
//     console.log("i am going to meet someone");
//     calback()
//     console.log("i have finished meeting")
// }

// meet(greeting)
// meet(dance)


function blinkitOrderPlaced(){
    console.log("we have started packing your food ")
}

function zomatoOrderplaced(){
    console.log("we have started preparing your food")
}

function payment(amount,calback){
    console.log(`${amount} payment has initilized`)
    console.log("payment is received")
    calback()


    //  GST Goverment
    //  Rider ko kitna payment dena hai
    //  Company ko kitna paise dena hai 
}


payment(500,zomatoOrderplaced);
payment(300,blinkitOrderPlaced);