let inputBox=document.getElementById("input-box");
let listcon=document.getElementById("list");

function addtask() {
    if (inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listcon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    } 
    inputBox.value=" ";
    savedAta();
}
listcon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedAta();
    }
    else if( e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savedAta();
    }
}, false);
function savedAta() {
    localStorage.setItem("data",listcon.innerHTML);
}
function showtask() {
    listcon.innerHTML=localStorage.getItem("data");
    
}
showtask();

