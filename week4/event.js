var box1 = document.querySelector(".box");

function click() {
  return box1.style.backgroundColor = "green"
}
box1.addEventListener("dblclick", click);

function hover() {
    box1.style.backgroundColor = "blue"
 }
box1.addEventListener("mouseover", hover);
 
 function hold() {
    box1.style.backgroundColor = "red"
 }
 box1.addEventListener("mousedown", hold);
 
 function up() {
    box1.style.backgroundColor = "yellow"
 }
 box1.addEventListener("mouseup", up);

 function scroll() {
    box1.style.backgroundColor = "orange"
 }
 box1.addEventListener("wheel", scroll);

 document.addEventListener('keypress', keydown);
 function keydown(k){
     if(k.code == "KeyR"){
         box1.style.backgroundColor = "red";
    } else if(k.code == "KeyB"){
         box1.style.backgroundColor = "blue";
    } else if(k.code == "KeyY"){
         box1.style.backgroundColor = "yellow";
    } else if(k.code == "KeyG"){
            box1.style.backgroundColor = "green";
    } else if(k.code == "KeyO"){
            box1.style.backgroundColor = "orange";
    }
};