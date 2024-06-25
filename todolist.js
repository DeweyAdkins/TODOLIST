const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");
const addTodoButton = document.getElementById("add-todo");

addTodoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);

function addTodo() {
  const newTodo = newTodoInput.value;
  const todoItem = document.createElement("li");
  todoItem.textContent = newTodo;
  todoList.appendChild(todoItem);
  newTodoInput.value = "";
}

function removeTodo(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.add("todo-done");
    setTimeout(() => {
      event.target.remove();
    }, 1000);
  }
}