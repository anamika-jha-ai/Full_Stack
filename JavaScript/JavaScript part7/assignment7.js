//Question 1 ( arrow function that accepts an array of numbers and returns the evrage of those numbers)

const arrayAverage = (arr) => {
    let total = 0;
    for ( let number of arr){
        total += number;
    }
    return total/ arr.length;
};

let arr = [6,8,9,5,4];
console.log(arrayAverage(arr));

//question2 (Arrow function named isEven that takes a single number as argument and returns if it is even or not)

let num = 4;
const isEven = (nm) => num %2 == 0;

console.log(isEven(num));

// Question 3 What will be the output of the exam
const object = {
    message: 'Hello, world',

    logMessage(){
        console.log(this.message);
    }
};
 setTimeout(object.logMessage,100);


//ANSWER : after a del;ay of 1 sec , undefines is logges to the console
 // while the setTimeout() function uses the object logMessage as a callback, still it
    //invkes object.logMessge as a regular function, rather than a method.
    //And the during a regular function inconvocation THIS equals the global object,
    //which is a window in the case of the browser environment
    //That is why console.log(this.messgae) inside logMessage method logs
    // window.message , which is undefined.

//end


