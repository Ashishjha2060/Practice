let tasks = [];
    let currentFilter = 'all';

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();
      if (text === '') return;
      tasks.push({ text, completed: false });
      input.value = '';
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function setFilter(filter) {
      currentFilter = filter;
      document.querySelectorAll('.filters span').forEach(el => el.classList.remove('active'));
      document.getElementById(`filter-${filter}`).classList.add('active');
      renderTasks();
    }

    function clearCompleted() {
      tasks = tasks.filter(task => !task.completed);
      renderTasks();
    }

    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = '';

      const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
      });

      filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const span = document.createElement('span');
        span.textContent = task.text;
        span.style.cursor = 'pointer';
        span.onclick = () => toggleTask(tasks.indexOf(task));

        const delBtn = document.createElement('button');
        delBtn.textContent = '×';
        delBtn.onclick = () => deleteTask(tasks.indexOf(task));

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
      });

      document.getElementById("itemsLeft").textContent = `${tasks.filter(t => !t.completed).length} items left`;
    }