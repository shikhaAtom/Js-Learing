const user = {
    username : "Hitesh",
    price : "999",

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
        
    }
}

//user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
//console.log(this);


// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
//chai()

const chai = () => {
    let username = "hitesh"
console.log(this.username);
    
}

chai()