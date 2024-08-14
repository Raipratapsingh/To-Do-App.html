document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const taskTime = document.getElementById("task-time");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value;
        const taskDueDate = taskDate.value;
        const taskDueTime = taskTime.value;

        if (taskText === "" || taskDueDate === "" || taskDueTime === "") {
            alert("Please fill out all fields before adding a task.");
            return;
        }

        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.innerText = `${taskText} - ${taskDueDate} ${taskDueTime}`;
        taskItem.appendChild(taskContent);

        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });
        taskItem.appendChild(completeButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = "";
        taskDate.value = "";
        taskTime.value = "";
    }

    addTaskButton.addEventListener("click", addTask);
});
