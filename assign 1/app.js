// Q1 Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Enter num 1")
let num2 = +prompt("Enter num 2")
if (num1 > num2) {
    console.log("Larger Num is : " + num1)
}
else if (num2 > num1) {
    console.log("Larger Num is : " + num2)
}
else {
    console.log("both are equal")
}

// Q2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// let a= +prompt("enter a number to check sign")

if (a > 0) {
    console.log("The number is: " + a + " " + "The Sign is +")
}
else if (a < 0) {
    console.log("The number is: " + a + " " + "The Sign is -")
}
else {
    console.log("NaN")
}


// Q3  Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let x = +prompt("num1 ...")
let y = +prompt("num2 ...")
let z = +prompt("num3 ...")
let c = +prompt("num4 ...")
let v = +prompt("num5 ...")
if (x > y && x > z && x > c && x > v) {
    console.log(x + " is larger number")
}
else if (y > x && y > z && y > c && y > v) {
    console.log(y + " is larger number")
}
else if (z > x && z > y && z > c && z > v) {
    console.log(z + " is larger number")
}
else if (c > x && c > y && c > z && c > v) {
    console.log(c + " is larger number")
}
else {
    console.log(v + " is larger number")
}

// Q4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    }
    else {
        console.log(i + " is odd")
    }

}

// Q5 Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let marks = +prompt("Enter your marks out of 100")
if (marks <= 100 && marks >= 90) {
    console.log("Your Grade is A")
}
else if (marks <= 90 && marks >= 80) {
    console.log("Your Grade is B")
}

else if (marks <= 80 && marks >= 70) {
    console.log("Your Grade is C")
}

else if (marks <= 70 && marks >= 60) {
    console.log("Your Grade is D")
}
else {
    console.log("Your Grade is F")
}

// Q6 Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i + " FIZZ")
    }
    else if (i % 5 === 0) {
        console.log(i + " BUZZ")

    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz")

    }
    else {
        console.log(i)
    }
}

// Q7 Write a JavaScript program to construct the following pattern, using a nested for loop.

for (i = 1; i <= 6; i++) {

    for (x = 1; x < i; x++) {

        var a = a += ("*")
    }
    console.log(a)
    a = " "
}