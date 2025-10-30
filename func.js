5.Write a program to implement ES6 functions.


code1:
leap.js

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};

isLeapYear(2024); 
isLeapYear(2023);

----------------------------------
node leap.js




code2:
addition.js
const sumSeries = (...numbers) => {   
  let sum = 0;
  for (let num of numbers) {          
    sum += num;                       
  }
  return sum;                         
};

console.log(sumSeries(1, 2, 3, 4, 5));  
console.log(sumSeries(10, 20, 30));      
------------------------------------
node addition.js




code3:
anonymous.js

const greet = function() {
  console.log("Hello, welcome!");
};

greet();
--------------------------------------
node anonymous.js
