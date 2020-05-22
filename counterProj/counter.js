
const span=document.querySelector("span");
const prev=document.querySelector("#bt1");
const reset=document.querySelector("#reset");
const next=document.querySelector("#bt2");
let num=0;
prev.addEventListener("click",function(){
   
  --num;
  if(num<0)
  span.classList.add("red");
  span.textContent=num;
 });
next.addEventListener("click",function(){
num++;
if(num>0)
span.classList.remove("red");
span.textContent=num;

});
reset.addEventListener("click",function(){
    num=0;
span.textContent=num;
});