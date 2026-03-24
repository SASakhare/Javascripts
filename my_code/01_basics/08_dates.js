

// Dates :
let myDates=new Date()

console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleTimeString());
console.log(typeof myDates);



let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());

myCreateDate=new Date(2023,0,23,5,4)
console.log(myCreateDate.toLocaleString());


myCreateDate=new Date("2023-01-14")
console.log(myCreateDate.toLocaleString());

myCreateDate=new Date("01-14-2023") // * MM-DD-YY
console.log(myCreateDate.toLocaleString());


let myTimeStamp= Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());



console.log(Math.floor(Date.now()/1000));

let newDate= new Date()

console.log(newDate);
console.log(newDate.getMonth());














