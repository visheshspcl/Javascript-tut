//TWO types : stack and heap 
//stack( primitive) : we get a copy 
//heap ( non - primitve): we get reference 

const { useInsertionEffect } = require("react");

let myYoutubename = "billionarie"
let anotherName = myYoutubename
anotherName = "chai aur code"
console.log(myYoutubename);
console.log(anotherName);

let user = {
    email : "visheshshukla" ,
    upi : "94833@ybl",
}

let userTwo = user
userTwo.email = " youaremine@gmail.com"
// now even in user gmail is changed as we have changed in original value

