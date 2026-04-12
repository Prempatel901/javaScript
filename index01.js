// function handleClick(){
//     const element = document.getElementById("first")
//     element.textContent = "Strike is coming"
// }

// const element = document.getElementById("first")
// element.onclick = function handleClick(){
//     // element.textContent = "strick is coming"
//     element.style.backgroundColor = "pink"

// }

// // const element = document.getElementById("first")
// element.onclick = function handleClick(){
//     element.textContent = "i am the best"
// }


// element.addEventListener('click', ()=>{
//     element.textContent = "i am the best";
    
// })
// element.addEventListener('dblclick', ()=>{
//     element.textContent = "strick is coming";

// })
// element.addEventListener('mouseenter', ()=>{
//     element.style.backgroundColor  ="green"

// })



// const child1 = document.getElementById("child1")
// child1.addEventListener('click',()=>{
//     child1.textContent = "i am clicked"
// })


const parent = document.getElementById("parent")

// console.log(parent.children)

function handleClick(e){
    e.target.textContent = "i am best"
    parent.removeEventListener('click', handleClick)
}

parent.addEventListener('click',handleClick)

// 

// parent.addEventListener('click',(e)=>{
//     console.log(e.target)
//     e.target.textContent = "i am clicked"
// })

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "i am clicked"
//     })
// }



//-----------------


// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click',(e)=>{
//     // console.log("GrandParent is click")
//     console.log(e.target)
// })
// const parent = document.getElementById("parent")
// parent.addEventListener('click',(e)=>{
//     // console.log(e)
//     // console.log("Parent is click")
// })
// const child = document.getElementById("child")
// child.addEventListener('click',(e)=>{
//     // console.log(e)
//     e.stopPropagation()
//     // console.log("Child is click")
// })


