// DOMContentLoaded event used just in case <script> is in the <head>
document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("todoForm");
    let todoList = document.getElementById("todoList"); // Where your newLi will appear

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stops the page from refreshing entirely

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "X";

        let newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value; // Whatever value was entered/submitted in the input

        todoList.appendChild(newTodo); // <li> is a child because of the <ul> in the HTML
        newTodo.appendChild(removeBtn);

        todoForm.reset(); // clear all the values of the form elements - sets values to default
    });

    todoList.addEventListener("click", function(event) {
        const item = event.target.tagName;
        if (item === "LI") {
          event.target.style.textDecoration = "line-through";
        } else if (item === "BUTTON") {
          event.target.parentNode.remove();
        }
    });
    });