 const btn=document.querySelector("button")
 const info=document.querySelector(".info")


function getData(url){
    const ajax=new XMLHttpRequest() //ajax instance
console.log(ajax);
// get request means:getting the data
ajax.open('GET',url,true) //true for asynchronus

// ajax.onreadystatechange=function(){
//    if(this.status===200 && this.readyState===4) //200 for successful
//   info.textContent=this.responseText
// }
ajax.onload=function(){
    if(this.status===200){
        info.textContent=this.responseText
    }
    else{
        console.log(this.statusText);
        
    }
}
ajax.onerror=function(){
    console.log("THERE WAS AN ERRPR");
    
}
ajax.send();

    
}
btn.addEventListener('click',function(){
    getData('name.txt')
})