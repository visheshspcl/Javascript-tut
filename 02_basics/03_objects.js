// singleton : made from constructor ,if we define as literal then it will not be singleton
//-> Object.create
// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: " Hitesh",
    

    age: 20,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastloginDays : ["monday","saturday"]

}

// accessing objects
 console.log(JsUser.email);
 //or
 console.log(JsUser["email"]);
 
 