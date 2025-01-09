// primitive (call by value function)

// 7 types : null;undefined;string;number;bigint;symbol;boolean

// reference (non primitive)(call by reference funtion)

// arrays;objects;functions

const id=Symbol("123")
console.log(id);

const heroes = ["tony","thor"]

// ab neeche wale object hai
{
//   curly braces  k ander jitna bhi kuch hai sab object hai
     name : "ritesh"
     age : 20
}

const myFunction = function()
{
    console.log("hello world ");
    
}
console.log(myFunction);


// ----------------------------------------------------------------------------

//  MEMORY
// 2 TYPES ; stack and heap
// stack is used in primitive datatypes ; heap is used in non primitive datatypes

let  myyoutubename = "traintraveller"

let anothername=myyoutubename

anothername="chai aur code"

console.log(myyoutubename);
console.log(anothername);
