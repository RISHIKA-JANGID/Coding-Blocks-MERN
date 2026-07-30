function addTask() {
    var taskInput = document.getElementById("myInput");
    var taskList = document.getElementById("myUL");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        
        var contentDiv = document.createElement("div");
        contentDiv.className = "task-content";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var textSpan = document.createElement("span");
        textSpan.textContent = taskText;

        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(textSpan);

        var actionsDiv = document.createElement("div");
        actionsDiv.className = "task-actions";

        var completeButton = document.createElement("button");
        completeButton.textContent = "Completed";
        completeButton.className = "completeBtn";
        completeButton.onclick = function() {
            checkbox.checked = !checkbox.checked;
            if (checkbox.checked) {
                textSpan.classList.add("completed");
            } else {
                textSpan.classList.remove("completed");
            }
        };

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "removeBtn";  
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(removeButton);

        li.appendChild(contentDiv);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

