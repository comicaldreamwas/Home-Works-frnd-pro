document.addEventListener("DOMContentLoaded", function() {
   const taskInput = document.getElementById('taskInput');
   const addTaskBtn = document.getElementById('addTask');
   const taskList = document.getElementById('taskList');


   addTaskBtn.addEventListener('click', function() {
       const taskText = taskInput.value.trim();
       if (taskText !== '') {
           addTask(taskText);
           taskInput.value = '';
       }
   });

   
   taskList.addEventListener('click', function(event) {
       if (event.target.tagName === 'BUTTON') {
           event.target.parentElement.remove();
       }
   });

   
   function addTask(taskText) {
       const li = document.createElement('li');
       li.textContent = taskText;
       const deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Delete';
       li.appendChild(deleteBtn);
       taskList.appendChild(li);
   }
});
