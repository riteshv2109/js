const score = 400
console.log(score);


// command+k is used to clear the console

const balance = new Number(100)
console.log(balance);
// new is used to create new object and Number is used to specify that objects type
console.log(balance.toString());
console.log(balance.toFixed(2));
// toFixed is used to format a number to fixed number of decimal places
//  2 is number of decimal places
let othername = 123.345
console.log(othername.toPrecision(3));

// toPrecision is used to format a number to a specified total number of significant digits
let num=10000000
console.log(num.toLocaleString());
// tolocalestring is used to format numbers, dates, or strings according to the user's locale (regional settings)
// use ['en-IN'] in ( ) ton use indian standards
console.log(num.toLocaleString('en-IN'));


