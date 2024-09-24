import type { Todo } from "./types/todos";
import { todos } from "./store/todos";
import { elements } from "./utils/elements";
import { renderTodos } from "./utils/render-todos";

//Show Error
function showError(message: string): void {
  elements.errorPopup.container.classList.remove("hidden");
  elements.errorPopup.message.textContent = message;
}

//Hide Error
function hideError(): void {
  elements.errorPopup.container.classList.add("hidden");
}

//Add Todo Button Click
elements.form.onsubmit = (event) => {
  event.preventDefault();
  const value = elements.todoInput.value.trim();

  if (value === "") {
    showError("Todo can not be Empty.");
    return;
  }

  const todo = {
    id: todos.length + 1,
    title: value,
    completed: false,
  } satisfies Todo;

  todos.push(todo);
  elements.todoInput.value = "";
  console.log(todos);
  renderTodos();
};
//Clear Todo Button Click
elements.clearTodoInputButton.onclick = () => {
  elements.todoInput.value = "";
  hideError();
};

//Close Popup
elements.errorPopup.closeButton.onclick = hideError;
elements.clearCompleted.onclick = () => {
  const incompletedTodos = todos.filter((x) => !x.completed);
  todos.splice(0, todos.length, ...incompletedTodos);
  renderTodos();
};

renderTodos();
