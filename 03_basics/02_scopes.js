// let a = 30;
// const b = 40;
// var c = 50; 

if(true) {
    let a = 30;
    const b = 40;
    var c = 50;  

}

//console.log(a);
//console.log(b);
console.log(c);//here c value is printing...that means it is function - scoped not block scope.this means 
                //that variables declared inside loops ,if statements or others blocks are not confined 
                //to tha block but can be accessed outside it.which can lead to bugs.
