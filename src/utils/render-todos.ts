import { todos } from "../store/todos";
import { elements } from "./elements";
import { updateItemsLeft } from "./update-items-left";

export function renderTodos(): void {
  elements.todoContainer.innerHTML = "";
  todos.forEach((x) => {
    //List Item
    const li = document.createElement("li");
    li.className = "bg-neutral-800 px-4 py-2 flex items-center";

    //Label
    const label = document.createElement("label");

    //Input
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className =
      "w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";

    input.onchange = () => {
      x.completed = input.checked;
      updateItemsLeft();
    };
    //Span
    const span = document.createElement("span");
    span.textContent = x.title;
    span.className = "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";

    //Indexing
    label.appendChild(input);
    label.appendChild(span);

    //Button
    const button = document.createElement("button");
    button.className =
      "ml-4 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-2 py-1.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900";
    button.textContent = "Delete";

    button.onclick = () => {
      todos.splice(todos.indexOf(x), 1);
      renderTodos();
    };

    //Indexing
    li.appendChild(label);
    li.appendChild(button);

    elements.todoContainer.appendChild(li);
  });

  updateItemsLeft();
}
