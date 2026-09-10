//question1
let num= 20;
 if (num%10==0){
    console.log("good number");
 }else{
    console.log("bad number");
 }

//question2
let name= prompt("please enter your name here");
let age = prompt("Please enter your age here");

alert(`${name} is ${age} years old`);

//question3

let quater=3;

switch(quater){
    case 1: console.log("january, february, march");
            break;
    case 2: console.log("April, may,june");
            break;
    case 3: console.log("July , August, September");
            break;
    case 4: console.log("October, Novenmber , December");
            break;
    default: console.log("NOT A QUARTER");
}

//question4
let str ="anamika";

if( (str[0]=="a" || str[0]=="A") && (str.length>5 ) ){
    console.log("Golden string");
}else{
    console/loh("Nota golden string");
}

//question 5
let a = 20;
let b = 4;
let c = 100;


if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }else{
        console.log(c, "is largest");
    }
}else{
    if(b>c){
        console.log(b,"is largest");
    }else{
        console.log(c,"is largest");
    }
}

//question 6

let num1= 32;
let num2= 42;

if((num1%10)== (num2 %10)){
    console.log("number have same last digit which is", num1%10);
}else{
    console.log("numebrs dont have the same last digit");
}