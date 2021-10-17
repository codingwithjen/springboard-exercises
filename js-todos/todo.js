const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList"); // Where your newLi will appear

// Retrieve from localStorage
const submittedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < submittedTodos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = submittedTodos[i].task;
    newTodo.isDone = submittedTodos[i].isDone ? true : false;
    if (newTodo.isDone) {
        newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTodo = document.createElement("li");
    let submittedTodo = document.getElementById("task").value;
    newTodo.innerText = submittedTodo;
    newTodo.isDone = false;
    todoList.appendChild(newTodo);
    todoForm.reset();

    // Save to localStorage
    submittedTodos.push({ task: newTodo.innerText, isDone: false });
    localStorage.setItem("todos", JSON.stringify(submittedTodos));
});

todoList.addEventListener("click", function(event) {
    const item = event.target.tagName;
    let clickedItem = event.target;

    if (!clickedItem.isDone) {
        clickedItem.style.textDecoration = "line-through";
        clickedItem.isDone = true;
    } else {
        clickedItem.style.textDecoration = "none";
        clickedItem.isDone = false;
    }

    for (let i = 0; i < submittedTodos.length; i++) {
        if (submittedTodos[i].task === clickedItem.innerText) {
            submittedTodos[i].isDone = !submittedTodos.isDone;
            localStorage.setItem("todos", JSON.stringify(submittedTodos));
        }
    }
});


