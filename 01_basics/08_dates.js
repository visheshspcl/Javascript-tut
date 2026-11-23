// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


// declare new date

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toLocaleDateString());

let myCreatedDate = new Date("2023-01-14")
let myCreatedDate2 = new Date("01-14-2-23")

// timestamp 

let myTimeStamp = Date.now()

//.getTime();

// to convert it into secs

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


// customization

newDate.toLocaleString('default',{
    weekday: "long"
})

//******It has been updated in new dev ***************
//******Updated one**************
