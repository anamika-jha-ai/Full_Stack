let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    ul.appendChild(item);
    input.value="";
});


/*let dltbtns = document.querySelectorAll(".delete");
for (dltbtn of dltbtns){
    dltbtn.addEventListener("click",function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}*/

//code to work on all elements of unorder list

ul.addEventListener("click", function(event) {
   // console.log(event.targe.nodeName); //tells us the which evvent got dlted
   // console.log("button clicked");
    if(event.target.nodeName =="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});