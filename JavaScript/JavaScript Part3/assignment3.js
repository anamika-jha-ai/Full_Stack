//question 1

let arr = [ 7 , 5, 4, 3 , -2];
let n = 4;

let ans = arr.slice(0,n);
console.log(ans);

// question 2
let arr2 = [ 7, 5, 0,-1];
let n2 = 3;

let ans2= arr.slice(arr.length - n );
console.log(ans2);

//question 3
 
let str= prompt("Please enter you string");

if(str.length==0){
    console.log("String is empty");
} else{
    console.log("String is not empty");
}

// question 4( To check whether the character at the given index is lovercase)

let str2 ="Anamika";
let idx = 3;

if(str[idx] == str2[idx].toLowerCase() ){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}

//question 5( to strip leading and trailing spaces from a string)

let str3= prompt("Please enter a string");
console.log(`original string = ${str3}`);
console.log(`string without space ${str3.trim()}`);

//question 6 (To check if the element exist in an aarray or not)
let arr3 = [ "hello" , 2 , 4 ,7 ,1];
let item = 4;

if(arr.indexOf(item)!= -1){
    console.log("element exist in array");
}else{
    console.log("Element doesn't exist in array");
}