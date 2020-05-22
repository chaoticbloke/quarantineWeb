// const question=document.querySelector(".question");
// question.addEventListener("click",function(){
// question.classList.add("show-text");
// });
// const minus=document.querySelector("span");
// minus.addEventListener("click",function(){
// minus.classList.remove("show-text");
// });
const bts=document.querySelectorAll(".question-btn");
bts.forEach(function(button){
   button.addEventListener("click",function(e){
       e.currentTarget.parentElement.parentElement.classList.toggle("show-text");

   });

});