let textInput = document.getElementById("text-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskBoard = document.getElementById("task-board");

let taskList = [];
let selectedTab = "all";

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
        filter(event);
    });
}

addButton.addEventListener("click", addTask);

function randomNum() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function addTask() {
    if (textInput.value.trim() === "") return;

    let task = {
        id: randomNum(),
        taskContent: textInput.value,
        isComplete: false,
    };
    taskList.push(task);
    textInput.value = "";
    render();
}

function render() {
    let filteredList = taskList;
    if (selectedTab === "ongoing") {
        filteredList = taskList.filter(task => !task.isComplete);
    } else if (selectedTab === "done") {
        filteredList = taskList.filter(task => task.isComplete);
    }

    let resultHtml = "";
    filteredList.forEach((task, index) => {
        resultHtml += `
            <div class="task ${task.isComplete ? 'task-done-bg' : ''}">
                <div class="${task.isComplete ? 'task-done' : ''}">${task.taskContent}</div>
                <div>
                    <button class="button" onclick="toggleComplete('${index}')">
                        <i class="fa-solid ${task.isComplete ? 'fa-rotate-right' : 'fa-check'}"></i>
                    </button>
                    <button class="button" onclick="deleteTask('${index}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`;
    });

    taskBoard.innerHTML = resultHtml;
}

function toggleComplete(index) {
    taskList[index].isComplete = !taskList[index].isComplete;
    render();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    render();
}

function filter(event) {
    selectedTab = event.target.id;
    tabs.forEach(tab => tab.classList.remove('selected-tab'));
    event.target.classList.add('selected-tab');
    render();
}

render();
