# CSS Properties

1. position - relative, absolute, fixed, float
2. background - linear-gradient, repeat-linear-gradient
3. background-color - hsl, rgba, rgb, #FFFFFF, #FFF
4. transform - scale, skewX, skewY, rotate
5. border-shadow
6. ::before, ::after
7. animation-name, animation-duration, @keyframes, animation-fill-mode, animation-iteration-count, animation-timing-function - only 8 property
8. cubic-bezier


# HTML Sections

main, header, footer, nav, article, section, figure [figcaption]
fieldset[legend, label] - for radio buttons
label for -- for value uses id
tabindex
flex, align-items, justify-items


# Javascript

1. Object.freeze - makes a object(dictionary) constant
2. ...arr -  array destructuring - comma seperated array values

    func(...args) -- same as *args
    
3. [a, b,,,,,c] = [...arr] | [a, b, ...arr1] = [...arr]- set variables with array values | Array.prototype.slice()
4. {a, b} = {a:v1, b:v2, c:v3}
5. {a:anya, b:anyb} = {a:v1, b:v2, c:v3}
    
6. 

{
    name: shiv,
    sayHello: function() {
        return 'Hello';
    }
}

===

{
    name: shiv,
    sayHello() {
        return `Hello ${name}`;
    }
}

===

class A {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
    get name() {
        return this.name;
    }
    set name(newName) {
        this.name = name;
    }
}


7. <script type="module" src="filename.js"></script>
8. export fn or export {fn1, fn2}
9. import { add } from './math_functions.js';
10. import * as myMathModule from "./math_functions.js";
11. import add from "./module.js" --- when done export default -- only one method can be passed
12. 

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}).catch(error => console.log(error));


In JavaScript, a function always has access to the context in which it was created. This is called closure.

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.












