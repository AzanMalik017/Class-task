//Class task to reduce JS in HTML


// console.log("Starting");
// function handleBindings(){
//     console.log("Handle Bindings");
// }

// function doBindings(){
//     console.log("Do Bindings");
//     var btn = document.getElementById("btnAdd");
//     btn.onclick = handleBindings;  //passing function ref
// }

// //doBindings();

// window.onload = doBindings;
// console.log("Finished");
   

//Anonymous function (Function with no name)

// window.onload = function(){
//     var btn = document.getElementById("btnAdd");
//     btn.onclick = function(){
//         console.log("Handle Bindings");
//     }
// }


//list adding manual entries

window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = AddToDo;
};

function AddToDo(){
    var myinput = document.getElementById("myinput").value;
    var todos = document.getElementById("todos");
    var newtextnode = document.createTextNode(myinput);
    var newLi = document.createElement("li");
    newLi.appendChild(newtextnode);
    todos.appendChild(newLi);
}

function handleDelete(Azan){
    var tag = Azan.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}