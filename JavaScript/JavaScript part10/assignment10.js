let button = document.createElement("button");
button.innerText ="click me";
button.setAttribute("id", "myButton");
document.body.appendChild(button);

button.addEventListener("click", function() {
  button.style.backgroundColor = "green";
});

const input = document.getElementById("nameInput");
const display = document.getElementById("displayName");

input.addEventListener("input",function(){
    const filtered = input.value.replace(/[^a-zA-Z ]/g,"");
    display.innerText = filtered;
});