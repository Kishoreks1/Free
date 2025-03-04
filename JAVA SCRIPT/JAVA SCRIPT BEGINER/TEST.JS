let Input;
const Day=1;

//For Output

console.log("ITS A GOOD TIME TO LEARTN");

//For Input

Input=prompt("What is your name");
console.log(Input);

//For T/F

Input=confirm("Are you a Male")
console.log(Input);

//For seeing Data Type 

Input=prompt("What is your Age");
console.log(typeof Input);

//For using a data in output

Input=prompt(`What is your name`);
console.log(`Your name is ${Input}`);

//For Where to Declear let and const

if (Day==1){
    let A = 10;
    console.log(A);
}
console.log(A);

//Data type conversion to string

Day = String(Day);
console.log(typeof Day);
console.log(Day);

//Data type conversion to Int

Day = Number(Day);
console.log(typeof Day);
console.log(Day);

//Map it'll duplicate the array and excutes

let numbers = [4, 9, 16, 25];
let A=numbers.map(Math.sqrt);
console.log(A);
console.log(numbers);
var car ={
    model:"K10",
    company:"hundai",
    wheel:4
}
var carArry = [{model:"K10",
    company:"hundai",
    wheel:4},{model:"K20",
        company:"hundai",
        wheel:2      
    }]; 

var number = carArry.map((num,i) => console.log(num));
console.log(number); // Output: [2, 3, 4, 5, 6]

//slice

let B = "Kishore";
let C = B.slice(3,5);
console.log(C);

//forEach does not return a new array

var ki = [1,2,3,4,5].forEach((num)=>{
    num = num+1;
    console.log(num);
})

var ki = [1,2,3,4,5]
var is = ki.forEach((num)=> num = num+1 )
console.log(ki,is);

//splice

let kish = [1, 2, 3, 4, 5];
let removed = kish.splice(1, 2);  
console.log(numbers);  // Output: [1, 4, 5]
console.log(removed);  // Output: [2, 3]

//split

let sentence = "JavaScript is awesome";
let limited = sentence.split(" ", 2); // Split only into 2 parts
console.log(limited);
// Output: ["JavaScript", "is"]

let str = "Hello World! Welcome to JavaScript.";
let words = str.split(" ");
console.log(words);
// Output: ["Hello", "World!", "Welcome", "to", "JavaScript."]

//shift used to remove the first element from an array and return it.

let pri = [10, 20, 30, 40];
let thi = pri.shift();
console.log(pri); // Output: [20, 30, 40]
console.log(thi); // Output: [10]

//Indexoff 

let lo = [10, 20, 30, 40].indexOf(30);
console.log(lo); // output: 2
