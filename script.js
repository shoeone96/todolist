// 유저가 값을 입력
// + 버튼 클릭 시 할일 추가
// delete 버튼 누르면 할일 삭제
// check 버늩 완료, 밑줄
// 진행중 끝남 탭 누르면, 언더바가 이동
// 끝남 탭은, 끝난 아이템만, 진행중은 진행중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템

let textInput = document.getElementById("text-input");
let addButton = document.getElementById("add-button");

let taskList = [];

addButton.addEventListener("click", addTask)

function randomNum() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

function addTask() {
    let task = {
        id: randomNum(),
        taskContent: textInput.value,
        isComplete: false,
    }
    console.log(task)

    taskList.push(task);
    render(taskList);
}

function render() {
    let resultHtml = "";
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == true) {
            resultHtml += `
                <div class="task">
                    <div class = "task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button class="button" onclick="toggleComplete('${i}')">
                            <i class="fa-solid fa-rotate-right"></i>
                        </button>
                        <button class="button" onclick="deleteTask('${i}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>`
        } else {
            resultHtml += `
                <div class="task">
                    <div>${taskList[i].taskContent}</div>
                    <div>
                        <button class="button" onclick="toggleComplete('${i}')">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="button" onclick="deleteTask('${i}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>`
        }
    }

    document.getElementById("task-board").innerHTML = resultHtml;
}

function toggleComplete(index) {
    taskList[index].isComplete = !taskList[index].isComplete;
    render();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    render();
}
