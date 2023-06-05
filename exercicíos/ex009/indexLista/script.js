function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== "") {
        var task = document.createElement('li');
        task.innerHTML = taskInput.value;
        taskList.appendChild(task);
        taskInput.value = "";
    }
}