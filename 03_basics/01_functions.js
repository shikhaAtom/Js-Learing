// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2) {
    // let result =  number1 + number2
    // return result
    return number1 + number2
}

let result = addTwoNumbers(3,5)
//console.log("results:" , result);

function loginUserMessage(username = "Sam"){
    if (!username ){
        //console.log("Please enter the Username")
        return       
    }
    return `${username} just logged In`
}
//console.log(loginUserMessage("Hitesh"));

function addCartPrice (val1,val2,...num){
    return num
}

//console.log(addCartPrice(200,500,2000,1500));


//object
const user = {
    username : "Hitesh",
    price : 999
}

function handleObject(anyObject) {
    console.log(`User Name is  ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username : "Sam",
    price : "399"
    }
);


const myNewArray = [200,400,600,800,1000]

function returnSecondValue(getArray) {
    return getArray[3];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800,1000]));
