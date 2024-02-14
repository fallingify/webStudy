function addTask() {
    var taskList = document.getElementById("taskList");

    var newTask = prompt("입력: ");

    if (newTask !== null && newTask.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = newTask;

        taskList.appendChild(li);
    } else {
        alert("입력하지 않았습니다");
    }
}

var addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);
