// question 1 ( Square ad sum the arra elements using the arrow function and then find the average of the array)

let nums = [1,2,6,3,4,5];

const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc,cur)=> acc+cur , 0);

let avg = sum / nums.length;
console.log(avg);




//question 2(creating an array using the map function whose eah element is equal to the original elemment plus 5)

let numbers = [2,5,4,6,7,-3,-6];
console.log(numbers.map((number)=> number +5));





//question 3(create a new array whose elements are in uppercase of words presents in the original ways)

let string = ["anamika","Snehendu","sneha","soham","srijan","simran"];
console.log(string.map((string) => string.toUpperCase()));
  




//question 4 (a function called doubleAndReturnArgs which accepts ans array amd a variable number
// arguments. the function should return a new array with the original array values and all of the additional arguments doubled)

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, 
    ...args.map((v)=> v*2),
];
console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2], 10,4));





//question 5 (A function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first and second object)
const mergeObjects =(obj1 , obj2) => ({...obj1 , ...obj2});

console.log({a: 1, b:2} , { c:3, d:4});
