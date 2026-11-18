//Using Array.map() method Write a program to square all elements in an array [2,4,3,5,10]

let numbers = [2, 4, 3, 5, 10];

console.log("Numbers before Square root:",numbers);

let square = numbers.map(function (num) {
  return num * num;
});

console.log("Numbers after Square root:",square);

//Using Array.filter() method - filter only the numbers from and above 18 [12, 18, 34, 32, 23, 21, 19]
let number1 = [12, 18, 34, 32, 23, 21, 19];
console.log("The given numbers are:", number1);

let result = number1.filter(function (num) {
  return num >= 18;
});

console.log("The numbers after filter",result);