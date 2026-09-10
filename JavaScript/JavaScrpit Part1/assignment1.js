//question1
let num= 11;
if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
}

//question2
//let name = prompt("Enter your name please");
//let age = prompt("Enter your age please");
//alert(` ${name} is ${age} years old.`);


//question3
let quarter=2;

switch(quarter){
    case 1: console.log("January , gebruary,march");
            break;
    case 2 : console.log("April, may , june");
            break;
    case 3: console.log("July, august, september");
            break;
    case 4 : console.log("Octorber , november , december");
            break;
    default : console.log("Not A Quater");
            break;
} 

//question 4

let str = "apples";

if((str[0]=='a' || start[0]=='A') && (str.length >5)){
    console.log("golden string");
}else{
    console.log("Not a golden string");
}

//question 5 

let a= 10;
let b = 11;
let c = 12;

if(a>b){
    if(a > c){
        console.log(a, "is largest");
    }else{
        console.log(c,"is largest");
    }
}else{
    if(b>c){
        console.log(b, "islargest");
    }else{
        console.log(c , "is largest");
    }
}

//question6

let num1 = 32;
let num2 = 48765;

if((num1%10) == (num2%10)){
    console.log("numbers have the same last digit which is", num1%10);

}else{
    console.log("number don't have the same last digit");
}