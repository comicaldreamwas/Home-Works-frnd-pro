$(document).ready(function() {
   const $form = $(".js--form");
   const $input = $(".js--form__input");
   const $todosWrapper = $(".js--todos-wrapper");


   const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
   savedTodos.forEach(todo => {
       addTodoToDOM(todo.text, todo.checked);
   });

   
   $form.on("submit", function(e) {
       e.preventDefault();
       const text = $input.val().trim();
       if (text) {
           addTodoToDOM(text);
           saveTodoToStorage(text);
           $input.val("");
       }
   });


   $todosWrapper.on("click", ".todo-item__delete", function() {
       const $todoItem = $(this).closest(".todo-item");
       removeTodoFromStorage($todoItem.find(".todo-item__description").text());
       $todoItem.remove();
   });

   $todosWrapper.on("click", ".todo-item__description", function() {
       const taskText = $(this).text();
       $("#modal-task-text").text(taskText);
       $("#taskModal").modal("show");
   });


   function addTodoToDOM(text, checked = false) {
       const $todoItem = $(`
           <li class="list-group-item todo-item ${checked ? "todo-item--checked" : ""}">
               <input type="checkbox" ${checked ? "checked" : ""}>
               <span class="todo-item__description">${text}</span>
               <button class="btn btn-danger btn-sm todo-item__delete">Видалити</button>
           </li>
       `);
       $todosWrapper.append($todoItem);

       $todoItem.find("input").on("change", function() {
           const isChecked = $(this).is(":checked");
           $todoItem.toggleClass("todo-item--checked", isChecked);
           updateTodoInStorage(text, isChecked);
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
