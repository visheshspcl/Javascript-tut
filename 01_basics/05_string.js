const name = "vishesh"
const repoCount = 50

console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vishesh')
//console.log(gameName[0]);
//console.log(gameName__proto_);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =  gameName.slice(-8,4);
console.log(anotherString);

// trim trimstart etc
const newStringOne = "  vishesh  "
console.log(newStringOne.trim());

//replace
const url = "https://www.visheshBillonarie.com/vishesh%20shukla"

console.log(url.replace("%20",'-'));

console.log(newStringOne.includes("sundar"));

const nameFirst = "vishesh-hc-vis"
console.log(nameFirst.split('-'));

 


