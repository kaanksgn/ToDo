export function getElement<T extends HTMLElement>(query: string): T {
  const element = document.querySelector<T>(query);
  if (element === null) throw new Error(`Element not found: ${query}`);
  return element;
}

export const elements = {
  form: getElement<HTMLElement>("form"),
  todoInput: getElement<HTMLInputElement>("#todo-input"),
  clearTodoInputButton: getElement<HTMLInputElement>("#clear-todo-input"),
  todoContainer: getElement<HTMLUListElement>("#todo-container"),
  itemsLeft: getElement<HTMLParagraphElement>("#items-left"),
  clearCompleted: getElement<HTMLButtonElement>("#clear-completed"),
  errorPopup: {
    container: getElement<HTMLDivElement>("#error-popup"),
    message: getElement<HTMLSpanElement>("#error-message"),
    closeButton: getElement<HTMLButtonElement>("#close-error-popup"),
  },
};
