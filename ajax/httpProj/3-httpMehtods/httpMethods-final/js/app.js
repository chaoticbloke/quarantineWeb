//get elements
const itemList = document.querySelector(".items");
const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const feedback = document.querySelector(".feedback");
const items = document.querySelector(".items");
const submtiBtn = document.getElementById("submitBtn");

httpForm.addEventListener("submit", submitItem);
//submit function
function submitItem(event) {
  event.preventDefault();

  const itemValue = itemInput.value;
  const imageValue = imageInput.value;

  if (itemValue.length === 0 || imageValue.length === 0) {
    showFeedback("please enter valid values");
  } else {
    postItemAPI(imageValue, itemValue);
    itemInput.value = "";
    imageInput.value = "";
  }
}

// load items
document.addEventListener("DOMContentLoaded", function() {
  getItemsAPI(showItems);
});

function showFeedback(text) {
  feedback.classList.add("showItem");
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove("showItem");
  }, 3000);
}

//submit item

function getItemsAPI(cb) {
  const url = "https://5bac59daecc1a70014306beb.mockapi.io/items";
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      cb(this.responseText);
    } else {
      console.log("something went wrong");
    }
  };
  ajax.onerror = function() {
    console.log("hello");
  };
  ajax.send();
}

function showItems(data) {
  const items = JSON.parse(data);
  let info = "";
  items.forEach(item => {
    info += `
      <li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
       <img src="${
         item.avatar
       }" id='itemImage' class='itemImage img-thumbnail' alt="">
       <h6 id="itemName" class="text-capitalize itemName"> ${item.name}</h6>
       <div class="icons">

        <a href='#' class="itemIcon mx-2 edit-icon" data-id=${item.id}>
         <i class="fas fa-edit"></i>
        </a>
        <a href='#' class="itemIcon mx-2 delete-icon" data-id=${item.id} >
         <i class="fas fa-trash"></i>
        </a>
       </div>
      </li>

`;
  });
  itemList.innerHTML = info;
  getIcons();
}

//post items

function postItemAPI(img, itemName) {
  const avatar = `img/${img}.jpeg`;
  const name = itemName;

  const url = "https://5bac59daecc1a70014306beb.mockapi.io/items";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function() {
    // console.log(this.responseText);

    getItemsAPI(showItems);
  };

  xhr.send(`avatar=${avatar}&name=${name}`);
}

// get Icons

function getIcons() {
  const editIcon = document.querySelectorAll(".edit-icon");
  const deleteIcon = document.querySelectorAll(".delete-icon");
  // console.log(deleteIcon);
  // add event listener to delete icon
  deleteIcon.forEach(icon => {
    const itemID = icon.dataset.id;
    icon.addEventListener("click", function(event) {
      event.preventDefault();
      deleteItemAPI(itemID);
    });
  });
  //add event listener to edit icon
  editIcon.forEach(icon => {
    const itemID = icon.dataset.id;
    icon.addEventListener("click", function(event) {
      event.preventDefault();
      const parent = event.target.parentElement.parentElement.parentElement;
      const img = parent.querySelector(".itemImage").src;
      const name = parent.querySelector(".itemName").textContent;

      // console.log(parent, img, name, itemID);
      editItemUI(parent, img, name, itemID);
    });
  });
}

//deleteUser

function deleteItemAPI(id) {
  const url = `https://5bac59daecc1a70014306beb.mockapi.io/items/${id}`;
  const ajax = new XMLHttpRequest();
  ajax.open("DELETE", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      getItemsAPI(showItems);
    } else {
    }
  };
  ajax.onerror = function() {
    console.log("hello");
  };
  ajax.send();
}
//edit user
function editItemUI(parent, itemImg, name, itemID) {
  event.preventDefault();
  //remove from dom
  items.removeChild(parent);
  //
  //
  const imgIndex = itemImg.indexOf("img/");

  const jpegIndex = itemImg.indexOf(".jpeg");
  const img = itemImg.slice(imgIndex + 4, jpegIndex);
  // console.log(img);

  //show items in the form
  itemInput.value = name.trim();
  imageInput.value = img;

  editedItemID = itemID;
  submtiBtn.innerHTML = "Edit Item";

  httpForm.removeEventListener("submit", submitItem);

  httpForm.addEventListener("submit", editItemAPI);
}
//
//
let editedItemID;

function editItemAPI() {
  event.preventDefault();

  const id = editedItemID;

  const itemValue = itemInput.value;
  const imageValue = imageInput.value;

  if (itemValue.length === 0 || imageValue.length === 0) {
    showFeedback("please enter valid values");
  } else {
    const img = `img/${imageValue}.jpeg`;
    const name = itemValue;
    const url = `https://5bac59daecc1a70014306beb.mockapi.io/items/${id}`;

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
      // console.log(this.responseText);

      reverseForm();
    };

    xhr.send(`avatar=${img}&name=${name}`);
  }
}

function reverseForm() {
  itemInput.value = "";
  imageInput.value = "";
  submtiBtn.innerHTML = "Add Item";
  httpForm.removeEventListener("submit", editItemAPI);
  httpForm.addEventListener("submit", submitItem);

  getItemsAPI(showItems);
}
