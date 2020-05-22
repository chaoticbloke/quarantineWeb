const squ=document.querySelectorAll(".square");
const head=document.querySelector("#head");
const p=document.querySelector("p")
const h1=document.querySelector("h1");
const btnHard=document.querySelector("#btnH");
const btnMedium=document.querySelector("#btnM");
const btnEasy=document.querySelector("#btnE");
const reset=document.querySelector("#reset")
reset.addEventListener("click",function(){
location.reload();
});
var pickedCol;

function square(pickedCol){
  for(var i=0;i<squ.length;i++)
  {
  
     squ[i].style.backgroundColor=arr[i];
     
     squ[i].addEventListener("click",function(){
       var curr=this.style.backgroundColor;
       if(curr===pickedCol)
       {
         p.textContent="Correct";
         p.style.backgroundColor=pickedCol;
         p.style.fontSize ="30px";
       }
       else{
         p.textContent="WRONG";
         p.style.backgroundColor="red";
         p.style.fontSize="25px";
         this.style.backgroundColor="#232323";
       }
     });
    
  }
  }
btnHard.addEventListener("click",function(){
  btnHard.style.backgroundColor="dodgerblue";
 
let num=9;
randomColor(num);
 pickedCol= arr[colorPicked(num)];
    head.textContent=pickedCol;
    square(pickedCol);

});
btnMedium.addEventListener("click",function(){
  
  btnMedium.style.backgroundColor="dodgerblue";
let num=6;
randomColor(num);
 pickedCol= arr[colorPicked(num)];
    head.textContent=pickedCol;
    square(pickedCol);

});
btnEasy.addEventListener("click",function(){
  
  btnEasy.style.backgroundColor="dodgerblue";
  let num=3;
  randomColor(num);
   pickedCol= arr[colorPicked(num)];
      head.textContent=pickedCol;
      square(pickedCol);
});
var arr=[];

function randomColor(num){
  for(let i=0;i<num;i++){  
let x=Math.floor(Math.random()*256);
let y=Math.floor(Math.random()*256);
let z=Math.floor(Math.random()*256);
let bg="rgb("+ x +", "+ y +", "+ z +")";
arr.push(bg);
  }
}
function colorPicked(num){
      var num=Math.floor(Math.random()*num);
   return num;
}