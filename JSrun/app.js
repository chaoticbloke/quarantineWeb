function outer(){
    console.log("outer");

    function inner(){
        console.log("inner function");
        
    }
     return inner;
    // inner();
    
}
 outer()();

// const val=outer()
// console.log(val)

