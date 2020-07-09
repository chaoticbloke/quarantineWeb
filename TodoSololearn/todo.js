todoMain();

function todoMain(){
    let inputEle,ulEle;
   getElements();
   addEventListener();
   
   function getElements(){
       inputEle=document.getElementsByTagName("input")[0];
       //if we dont define variables as var or let it goes to GLOBAL 
       ulEle=document.getElementsByTagName("ul")[0];
       
       
       

   }
   function addEventListener(){
       inputEle.addEventListener("change",onchange);


   }
   function onchange(){
       value =inputEle.value
    //    ulEle.innerHTML+=`<li> ${value}</li>`;
    let createLi=document.createElement("li");
    createLi.innerHTML=value + "<span class='material-icons'>delete</span>";
    createLi.addEventListener("dblclick",onClick);
    ulEle.appendChild(createLi);
       inputEle.value="";  // to resrt input

     
     
       
   }
   function onClick(){
       this.remove();
   }
}