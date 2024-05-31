document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const newTodoText = todoInput.value.trim();
      if (newTodoText !== '') {
          addTodoItem(newTodoText);
          todoInput.value = '';
      }
  });

  function addTodoItem(text) {
      const li = document.createElement('li');
      li.textContent = text;

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Done';
      completeButton.addEventListener('click', () => {
          li.classList.toggle('completed');
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => {
          li.remove();
      });

      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  }
});
