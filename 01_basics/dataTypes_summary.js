// # primitive data type( call by value)

// 7 types : string , numbers ,etc

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;
// defining symbol :
const id= Symbol('123')
const anotherId = Symbol('123')// both are not equal
  

const bigNumber = 249484848948483n

// reference type : arrays objects and functions etc
// js is dynamically typed 

const heroes = [ "shaktiman", " doga"]
let myObj = {
    name : " vishesh",
    age : 22,
}

const myfunction = function(){
    console.log("hello, world")
}

console.log(typeof bigNumber);

// type of null is object#####
// type of non primive data types is object function
