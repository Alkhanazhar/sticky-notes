var textarea=document.querySelector("#container-text")
console.log("hey hello")



function typetext(){
    if(textarea.style.display=="none"){
textarea.style.display="block"
    }
    else{
        textarea.style.display="none"
    }
}
function createnote(){
    var container2=document.querySelector(".container2")
    var notes=document.querySelector("#user_input").value;
    var node0=document.createElement("div");
    var node1=document.createElement("h2");
    node1.innerHTML=notes;
    node0.setAttribute("style","width:250px;height:250px;background-color:linen;font-size:22px;margin:15px;padding:10px;")
    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend",node0)
}