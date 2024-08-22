const apiUrl = 'http://localhost:5000/api/todos';

async function loadTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.text} - ${todo.completed ? 'Completed' : 'Pending'}`;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = async () => {
            await fetch(`${apiUrl}/${todo._id}`, { method: 'DELETE' });
            loadTodos();
        };

        
        const toggleButton = document.createElement('button');
        toggleButton.textContent = todo.completed ? 'Mark as Pending' : 'Mark as Completed';
        toggleButton.onclick = async () => {
            await fetch(`${apiUrl}/${todo._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !todo.completed })
            });
            loadTodos();
        };

        li.appendChild(deleteButton);
        li.appendChild(toggleButton);
        todoList.appendChild(li);
    });
}

document.getElementById('todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value;

    if (text) {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        todoInput.value = '';
        loadTodos();
    }
});

loadTodos();
