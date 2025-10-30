/* Normal Function */ 

function check(num){
if (num%2!=0){
console.log("Number is odd")
}
else if(num==0){
console.log("Number is 0")
}
else{
console.log("Number is even")
}
}
check(0)
check(2)
check(3)


/* Arrow Function */ 

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};

isLeapYear(2024); 
isLeapYear(2023);


/* rest parameter */ 
const sumSeries = (...numbers) => {   
  let sum = 0;
  for (let num of numbers) {          
    sum += num;                       
  }
  return sum;                         
};

console.log(sumSeries(1, 2, 3, 4, 5));  
console.log(sumSeries(10, 20, 30));      

/* Anonymous Function */ 

const greet = function() {
  console.log("Hello, welcome!");
};

greet();

