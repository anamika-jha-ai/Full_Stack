//question 1( delete occurace opf a given number in an array)

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}

console.log(arr);

//question 2 (number of digits in a nummber)

let number = 87576446;
let count = 0;

let copy = number;

while(copy>0){
    count++;
   copy = Math.floor(copy/10);
}
 console.log(count);

//question 3 (sum of digits in a number)
let num1 = 96;
let sum = 0 ;
let copy1 = num1;

while(copy1 > 0){
    digit = copy1 % 10;
    sum += digit;
    copy1 = Math.floor(copy1 /10);
    
}
console.log(sum);

//question 4 (Prinithing factorial of a number)
let n = 5;
let factorial = 1;

for (let i = 1 ; i<=n; i ++){
    factorial *= i;

}

console.log(`factorial of ${n} is ${factorial}`);

//question 5 (Largest in a array in positive number)

let arr2 = [ 2, 7, 6 , 5, -1, 4];
let largest = 0;

for(let i = 0; i <=arr.length; i++){
    if(largest <arr[i]){
        largest = arr[i];
    }
}
console.log(largest);