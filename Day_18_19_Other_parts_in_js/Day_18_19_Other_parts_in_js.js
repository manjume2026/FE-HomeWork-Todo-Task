// Write code
// Add an Event listener on clicking a button

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Write code for
// i) setting a value in LocalStorage

localStorage.setItem("name", "Manju");
localStorage.setItem("name1", "Manisha");
localStorage.setItem("name2", "Varshan");
localStorage.setItem("name3", "Varshika");
localStorage.setItem("name4", "Jothi");

// ii) getting a value in LocalStorage

const n = localStorage.getItem("name");
console.log(n);

// iii) removing a value in LocalStorage

localStorage.removeItem("name");

// iv) removing all values in LocalStorage

localStorage.clear();

//Write an example code for Ternary condition

let age = 20;
let result = age >= 18 ? "Adult" : "Child";
console.log(result);

//Write an example code for in operator - to find whether a property exists in an object. const user = { name: "Alice", age: 25 }

const user = {
  name: "Alice",
  age: 25,
};

console.log("name" in user);

//Write an example code for Optional Chaining

const user1 = {
  name: "Alice",
  address: {
    city: "Chennai",
  },
};

console.log(user1.address?.city);

//Write example code. How will you make a ‘this’ keyword of an Object to point to another Object
const user2 = {
  name: "Alice",
};

const user3 = {
  name: "Bob",
};

function greet() {
  console.log("Hello " + this.name);
}

greet.call(user2);
greet.call(user3);

// //Write code for
// i) setTimeout

setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);

// ii) setInterval

const id = setInterval(function () {
  console.log("Hello");
}, 2000);

clearInterval(id);
