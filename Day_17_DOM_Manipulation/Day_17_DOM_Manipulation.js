// // Write code to get an element
let element = document.getElementById("title");

console.log(element);

//In JS write code to set a content inside an HTML
let element1 = document.getElementById("text");

element1.innerHTML = "Hi Manju";

//Write code to get the inner elements
let box = document.getElementById("title");

console.log(box.innerHTML);

// i) Creating an element

let para = document.createElement("p");
para.textContent = "This is a new paragraph.";
console.log(para);

// ii) Appending an element into another element

let box1 = document.getElementById("boxappend");
let newpara = document.createElement("p");
newpara.textContent = "Besant Technologies";
box1.appendChild(newpara);

// iii) Removing an element

let paratag = document.getElementById("paratag");
paratag.remove();

// Write code for modifying attributes
// i) Get Attribute

let image = document.getElementById("image");
let source = image.getAttribute("src");
console.log(source);

// ii) Set Attribute

image.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdKPKQBJDqxZWwZ8ptvig_txT5MPq0FsRYwovr4ni6G26zB0AFj2viQ26&s=10",
);

// iii) Remove Attribute

image.removeAttribute("alt");

// Write code for - Modifying HTML Classes from JS
// i) Add Class

let jsid = document.getElementById("jsid");
jsid.classList.add("active");

// ii) Remove Class

jsid.classList.remove("active");

// iii) Toggle Class

jsid.classList.toggle("active");
console.log(jsid);

//Write code - for updating an inline style from JS
let color = document.getElementById("color");
color.style.color = "red";
color.style.backgroundColor = "yellow";
color.style.fontSize = "30px";
