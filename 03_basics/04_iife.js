// 1.why we use IIFE ?
//     Its immediately executes the function.

// 2.why immediately execution is required??
//     to get rid of global scoped declaration or valuable which cause problem some Time 

//Named IIFE when function is written with function name not in arrow function

(function chai(){
    console.log("DB CONNECTED")
})();

//unnamed IIFE when function is written in arrow function not with named function
(()=>{
    console.log("DB CONNECTED TWO");   
 })();

//parameter in IIFE

 ((name) => {
    console.log(`DB CONNECTED 3 ${name}`);
})('Shikha')
