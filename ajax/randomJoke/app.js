
const one=document.getElementById("one")
const two=document.getElementById("two")
const btn=document.querySelector('button')



btn.addEventListener("click",function(){
let ajax=new XMLHttpRequest()
const URL="https://official-joke-api.appspot.com/random_joke"
ajax.open('GET',URL,true)

ajax.onload=function(){
    if(this.status===200)
    {
       const dataObj=JSON.parse(this.responseText)
            one.textContent= dataObj.setup;
             two.textContent=dataObj.punchline;
               

    }
    
}



ajax.onerror=function(){
    console.log("Error occurred");
    
}
ajax.send()
})