function loadTodos(){
    // This function load todos from browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todolist" :[]};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(toDoText){
    const todos = loadTodos();
    todos.push(toDoText);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function appendTodoInHtml(toDoText){
    const todolist = doucumen.getElementById("todolist");
    const todo = document.createElement("li")
    todo.textContent = toDoText;
    todolist.appendChild("todo")
}

document.addEventListener("DomContentLoaded", () => {
    const toDoInput = document.getElementById("toDoInput")
    const submitBtn = document.getElementById("addTodo")

    submitBtn.addEventListener("click", (event) => {
        const toDoText = toDoInput.value
        if(toDoText == ""){
            alert("please write something for the todo")
        }else{
            addTodoToLocalStorage();
        }
    })

    toDoInput.addEventListener("change", (event) => {
        const toDoText = event.target.value;

        event.target.value = toDoText.trim();
        console.log(event.target.value);
    });
    const todos = loadTodos();

    todos.todolist.forEach(todo => {
      const newTodoItem = documnet.createElement("li")  
      newTodoItem.textContent = todo;
      todolist.appendChild(newTodoItem);
    });
})


