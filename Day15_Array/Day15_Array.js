let a; //Declare a variable
a = 20; //Assign value to that variable
let b = 15;

//Create an Array and assign it to a variable
const names = ["Manju", "Manisha", "Varshan", "Varshika", "Jothi"];

console.log(names);

//How will you access the elements inside an array. Write some example.
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//Create an Object literal and assign it to a variable
let student = {
  name: "Manju",
  age: 25,
  course: "JavaScript",
};

console.log(student);

// How will you access the properties inside an object. Write some example.
console.log(student.name);
console.log(student.age);
console.log(student.course);

// How will you get the length of the array.

console.log("Length of the Array is", names.length);

//Create an array with numbers.
//Loop into that array elements, and print each number multiplied with 2.
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}