//return objects with arrow function

// const fun=()=>({name:"aditya",age:24});
// const first=fun();
// console.log(first);

//ad callback function

// const num=[1,2,3,4,12]
// //filter function returns an array
// const big=num.filter((num)=>{
//     return num>3

// })
// console.log(big);



//define OBJECT in js
// const obj={
//     name:"aditya",
//     age:21
// }



//VAR LET CONST

//VAR : function scoped
//let and const :blocked scope


//with var we can redefine the same varible(Bad thing)
//with let const we CANNT do that



// let button=document.getElementsByTagName("button")[0];
// button.addEventListener("click",()=>{
//     console.log("button clicked");
    
// })

//TEMPLATE LITERALS
// const obj={
//     name:"aditya",
//     age:21,
//     hobbies:["Films","Skating","Religion","History"]
// }
// let h1=document.getElementsByTagName("h1")[0];
// h1.innerHTML=`<h3>${obj.name}</h3>
// <h3>${obj.age}</h3>
// <ul>
// ${obj.hobbies.map(item=>{
//     return `<li>${item}</li>`
// }).join("")}
// </ul>
// `

//THIS KEYWORD
// let headings=document.querySelectorAll('h3')
// let h1=document.querySelector("h1")
// const arr=[...headings].map(item=>`<span>${item.textContent}</span>`).join('')
// h1.innerText=arr
// const name=['jhon','bob']
// const say=(name,another)=>{
//     console.log(`first name ${name} last name${another}`);
    
// }
// say(...name)
