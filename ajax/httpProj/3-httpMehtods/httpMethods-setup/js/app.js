//get elements
const itemList = document.querySelector(".items");
const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const feedback = document.querySelector(".feedback");
const items = document.querySelector(".items");
const submtiBtn = document.getElementById("submitBtn");
let editedItemID = 0;

 const url="https://5ef0d13e1faf160016b4cf83.mockapi.io/items";

 //load items

 document.addEventListener('DOMContentLoaded',function(){
     getItemsAPI(showItems);

 })

 //get items form the api
function getItemsAPI(cb){
    const url="https://5ef0d13e1faf160016b4cf83.mockapi.io/items";

    const ajax=new XMLHttpRequest()
    ajax.open('GET',url,true)
    ajax.onload=function(){
        if(this.status===200)
        {
            cb(this.responseText)

        }
        else{
            console.log("Error occrured");
            
        }
    }



    ajax.onerror =function(){
        console.log("Error occurred");
        
    }
    ajax.send();

}
 //show items
 function showItems(data){
    const items=JSON.parse(data)
   let info=""
   items.forEach(element => {
       info+=`<li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
       <img src="${items.image}"id='itemImage' class='itemImage img-thumbnail' alt="">
       <h6 id="itemName" class="text-capitalize itemName">${items.name}</h6>
       <div class="icons">

        <a href='#' class="itemIcon mx-2 edit-icon" data-id="${items.id}">
         <i class="fas fa-edit"></i>
        </a>
        <a href='#' class="itemIcon mx-2 delete-icon" data-id=''>
         <i class="fas fa-trash"></i>
        </a>
       </div>
      </li>`
   });
     
itemList.innerHTML=info
 }