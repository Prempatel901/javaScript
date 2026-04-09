// forEach ,filter, reducer, map, set



// const arr = [10,20,30,40,50,5,8,7]

// let sum  = 0

// arr.forEach((num)=>{
//     sum +=num;
// })

// console.log(sum)



// filter

//const arr = [10,20,30,40,50,5,8,7]
//true: select, false: not selects
// const newArr =arr.filter((num)=>num > 25)

// console.log(newArr)


// Array.prototype.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num))
//             ans.push(num);
//     }
//     return ans
// }

//const hero = [23,34,12,42,23,63,38]


// const newarr= hero.filtering((num)=> num>30)

// console.log(newarr)



// const arr = [23,34,12,42,23,63,38]


// const newarr = arr.map((num)=>num*2)


// console.log(newarr)


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];




// const newPro = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price}))
// console.log(newPro)


// const ans = products.map((product)=>({name:product.name, price:product.price}))
// console.log(ans)


// reduce------------------------------------❤️


// accumulator = 0
// accumulator = 1200


// const total = products.reduce((accumulator,currenValue)=>{
//     if(currenValue.inStock)
//         return accumulator+currenValue.price
//     else    
//         return accumulator
// },0)

// console.log(total)


// const newPro = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).reduce((accumulator,currenValue)=>{
//     return accumulator+currenValue.price
// },0)

// console.log(newPro)


// Data structure: set

// const arr =[10,20,30,40,50,15,10,20]
// // console.log(arr)

// const s1 = new Set(arr);
// s1.add(16)
// s1.delete(20)
// s1.clear()
// console.log(s1)
// console.log(s1.has(12))


//  const gmail = ["ro@gm","ra@gm","mo@gm","ro@gm"]

// // const  email = [...new Set(gmail)]
// // console.log(email)

// const s1 = new Set(gmail)

// for(let num of s1){
//     console.log(num)
// }


//  map;

const m1 = new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11],
    [[10,20,30],"mohit"]

]);

m1.set({name:"Manish",age:20},false)

// console.log(m1.size)
for(let [keys,value] of m1){
    console.log(keys,value)
}

//console.log(m1)