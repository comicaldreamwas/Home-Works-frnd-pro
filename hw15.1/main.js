document.addEventListener("DOMContentLoaded", () => {
   const form = document.querySelector(".js--form");
   const input = document.querySelector(".js--form__input");
   const todosWrapper = document.querySelector(".js--todos-wrapper");

  
   const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
   savedTodos.forEach(todo => {
       addTodoToDOM(todo.text, todo.checked);
   });

   
   form.addEventListener("submit", (e) => {
       e.preventDefault();
       const text = input.value.trim();
       if (text) {
           addTodoToDOM(text);
           saveTodoToStorage(text);
           input.value = "";
       }
   });

  
   function addTodoToDOM(text, checked = false) {
       const listItem = document.createElement("li");
       listItem.className = `todo-item${checked ? " todo-item--checked" : ""}`;
       listItem.innerHTML = `
           <input type="checkbox" ${checked ? "checked" : ""}>
           <span class="todo-item__description">${text}</span>
           <button class="todo-item__delete">Видалити</button>
       `;
       todosWrapper.appendChild(listItem);

      
       listItem.querySelector("input").addEventListener("change", (e) => {
           const isChecked = e.target.checked;
           listItem.classList.toggle("todo-item--checked", isChecked);
           updateTodoInStorage(text, isChecked);
       });

       
       listItem.querySelector(".todo-item__delete").addEventListener("click", () => {
           listItem.remove();
           removeTodoFromStorage(text);
       });
   }

 
   function saveTodoToStorage(text) {
       const todos = JSON.parse(localStorage.getItem("todos")) || [];
       todos.push({ text: text, checked: false });
       localStorage.setItem("todos", JSON.stringify(todos));
   }

   
   function updateTodoInStorage(text, checked) {
       const todos = JSON.parse(localStorage.getItem("todos")) || [];
       const todo = todos.find(todo => todo.text === text);
       if (todo) {
           todo.checked = checked;
       }
       localStorage.setItem("todos", JSON.stringify(todos));
   }

  
   function removeTodoFromStorage(text) {
       let todos = JSON.parse(localStorage.getItem("todos")) || [];
       todos = todos.filter(todo => todo.text !== text);
       localStorage.setItem("todos", JSON.stringify(todos));
   }
});
