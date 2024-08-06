"use strict";

$(document).ready(function () {
  var $form = $(".js--form");
  var $input = $(".js--form__input");
  var $todosWrapper = $(".js--todos-wrapper");
  var savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(function (todo) {
    addTodoToDOM(todo.text, todo.checked);
  });
  $form.on("submit", function (e) {
    e.preventDefault();
    var text = $input.val().trim();
    if (text) {
      addTodoToDOM(text);
      saveTodoToStorage(text);
      $input.val("");
    }
  });
  $todosWrapper.on("click", ".todo-item__delete", function () {
    var $todoItem = $(this).closest(".todo-item");
    removeTodoFromStorage($todoItem.find(".todo-item__description").text());
    $todoItem.remove();
  });
  $todosWrapper.on("click", ".todo-item__description", function () {
    var taskText = $(this).text();
    $("#modal-task-text").text(taskText);
    $("#taskModal").modal("show");
  });
  function addTodoToDOM(text) {
    var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $todoItem = $("\n           <li class=\"list-group-item todo-item ".concat(checked ? "todo-item--checked" : "", "\">\n               <input type=\"checkbox\" ").concat(checked ? "checked" : "", ">\n               <span class=\"todo-item__description\">").concat(text, "</span>\n               <button class=\"btn btn-danger btn-sm todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n           </li>\n       "));
    $todosWrapper.append($todoItem);
    $todoItem.find("input").on("change", function () {
      var isChecked = $(this).is(":checked");
      $todoItem.toggleClass("todo-item--checked", isChecked);
      updateTodoInStorage(text, isChecked);
    });
  }
  function saveTodoToStorage(text) {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({
      text: text,
      checked: false
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function updateTodoInStorage(text, checked) {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    var todo = todos.find(function (todo) {
      return todo.text === text;
    });
    if (todo) {
      todo.checked = checked;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function removeTodoFromStorage(text) {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(function (todo) {
      return todo.text !== text;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});