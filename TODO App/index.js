function loadTodos(){
    // This function loads todos from browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todolist" :[]};
    console.log("Loaded todos:", todos);
    return todos;
}

function addTodoToLocalStorage(todoText){
    const todos = loadTodos();
if (todos) {
    todos.todolist.forEach(todo => {
        appendTodoInHtml(todo);  
    });
} else {
    console.error("Error loading todos");
}
}

function appendTodoInHtml(todoText){
    const todolist = document.getElementById("todolist");
    if (todolist) {
        const todoItemContainer = document.createElement("div"); 
        todoItemContainer.className = "todo-item-container"; 
        const todoContainer = document.createElement("div"); 
        todoContainer.className = "todo-container"; 

        const todo = document.createElement("li");
        todo.textContent = todoText;
        todoContainer.appendChild(todo);

        const buttonsContainer = document.createElement("div"); 
        buttonsContainer.className = "buttons-container"; 

        // Add Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", editTodo); 
        buttonsContainer.appendChild(editButton);

        // Add Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", deleteTodo);
        buttonsContainer.appendChild(deleteButton);

        // Add Completed button
        const completedButton = document.createElement("button");
        completedButton.textContent = "Completed";
        completedButton.className = "completed-button";
        completedButton.addEventListener("click", completeTodo);
        buttonsContainer.appendChild(completedButton);

        todoItemContainer.appendChild(todoContainer);
        todoItemContainer.appendChild(buttonsContainer); 
        todolist.appendChild(todoItemContainer); 
        console.log("Todo appended to HTML:", todoText);
    } else {
        console.error("Error appending todo to HTML");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const toDoInput = document.getElementById("toDoInput");
    const submitButton = document.getElementById("addTodo");
    const todolist = document.getElementById("todolist");

    if (toDoInput && submitButton && todolist) {
        submitButton.addEventListener("click", (_event) => {
            const todoText = toDoInput.value.trim();
            if (todoText !== "") {
                addTodoToLocalStorage(todoText);
                appendTodoInHtml(todoText);
                toDoInput.value = "";
            } else {
                alert("Please write something for the todo");
            }
        });

        toDoInput.addEventListener("change", (event) => {
            const todoText = event.target.value.trim();
            event.target.value = todoText;
            console.log("Todo input changed:", todoText);
        });

        const todos = loadTodos();
        if (todos) {
            todos.todolist.forEach(todo => {
                const newTodoItem = document.createElement("li");
                newTodoItem.textContent = todo;
                todolist.appendChild(newTodoItem);
            });
        } else {
            console.error("Error loading todos");
        }
    } else {
        console.error("Error getting HTML elements");
    }
});

// Function to edit todo
function editTodo(event) {
    const todoItemContainer = event.target.parentNode.parentNode;
    const index = todoItemContainer.dataset.index;
    const newTodoText = prompt("Enter new todo text:");
    if (newTodoText !== null) {
        const todos = loadTodos();
        todos.todolist[index] = newTodoText;
        localStorage.setItem("todos", JSON.stringify(todos));
        todoItemContainer.querySelector("li").textContent = newTodoText;
        console.log("Todo edited:", newTodoText);
    }
}

// Function to delete todo
function deleteTodo(event) {
    const todoItemContainer = event.target.parentNode.parentNode;
    const index = todoItemContainer.dataset.index;
    const todos = loadTodos();
    todos.todolist.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoItemContainer.remove();
    console.log("Todo deleted");
}

// Function to complete todo
function completeTodo(event) {
    const todoItemContainer = event.target.parentNode.parentNode;
    const index = todoItemContainer.dataset.index;
    const todos = loadTodos();
    const completedTodos = JSON.parse(localStorage.getItem("completedTodos")) || {"completedTodolist" :[]};
    completedTodos.completedTodolist.push(todos.todolist[index]);
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
    todoItemContainer.remove();
    console.log("Todo completed");
}