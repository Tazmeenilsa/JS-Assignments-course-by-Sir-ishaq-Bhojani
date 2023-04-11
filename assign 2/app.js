// Q1 Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passe to it.

function init() {
    let num1 = +prompt("enter a number")
    return function () {
        return num1 + 5
    }
}
let innerFunction = init()
console.log(innerFunction())

// Q2 Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

let arr = [12, 34, 54, 2, 3]; 
let i; 
let n = arr.length; 
let x = 23; 
let index = recSearch(arr, 0, n - 1, x); 

function recSearch(arr, l, r, x) 
{ 
    if (r < l) 
        return -1; 
    if (arr[l] == x) 
        return l; 
    if (arr[r] == x) 
        return r; 
     return recSearch(arr, l+1, r-1, x); 
} 

if (index != -1){
    document.write(`Element ${x} is present at index ${index}`); 
  }
  else{
      document.write("Element is not present " + x); 
  }
// 
// Q#3 Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

let myPara = document.getElementById("wrapper")

function para(paragraph) {
    myPara.innerHTML = (paragraph)
}

para("<p>Hi, This is Tazmeen Ilsa </p>")


// Q#4 Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item

let list = document.getElementById("uList")
function newList(lst) {
    list.innerHTML = (lst)
}

newList("<li>React Native Developer</li>")

// Q#5 Write a function that changes the background color of an HTML element.The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing the new background color
function backgroundChange(q, c) {
    let element = document.querySelector(q)
    element.style.backgroundColor = c
}
backgroundChange("p", "pink")


// Q#6 Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let stdArray = []
function studentsData(key) {
    let std = {
        name: prompt("Enter name"),
        rollno: +prompt("Enter Roll No"),
        className: prompt("Enter Your class")
    }
    stdArray.push(std)
    let stringify = JSON.stringify(stdArray)
    localStorage.setItem(key, stringify)
}

studentsData("students")

// Q#7  Write a function that retrieves an object from localStorage. The function  should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getStd (key){
let getStudents =localStorage.getItem(key)
stdArray=JSON.parse(getStudents)
}
getStd("students")

// Q#8 Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

let prevData=localStorage.getItem("mySelf")
let data = prevData ? JSON.parse(prevData) : []
function myData (){
let info={
    name:"Tazmeen Ilsa",
    age:22,
    education:"Graduate",
}
data.push(info)
let str= JSON.stringify(data)
localStorage.setItem("mySelf",str)
}

myData()