document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTask(task);
            input.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;
        span.className = 'task-text';
        span.onclick = function() {
            li.classList.toggle('completed');
        };
        li.appendChild(span);
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function() {
            list.removeChild(li);
        };
        li.appendChild(delBtn);
        list.appendChild(li);
    }
});
