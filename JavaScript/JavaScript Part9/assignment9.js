//Question 1(creating button and inpt only using java script)

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


//Question 2(adding attributes...change placeholde value of input to "username" and change the if of button to "btn")
button.setAttribute("id", "btn");
input.setAttribute("placeholder","username");

document.body.append(input);
document.body.append(button);


//question 4(Create an h1 element on the page and set its tect to tha "DOM practice" underlined to purple)

let h1= document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);


//question 3 (Acess th btn using the query slector and button id . change the button background color to blue and text color to white)

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


//question 5(create a p tage on the page and set its text to "Apna college sigma practice", where delta is bold)
let p = document.createElement("p");

p.innerHTML = "Apna college <b>Sigma</b> practice";
document.querySelector("body").append(p);