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

function addTask() {
    let taskContent = textInput.value;
    taskList.push(taskContent);
    render(taskList);
}

function render() {
    let resultHtml = "";
    for (let i = 0; i < taskList.length; i++) {
        resultHtml += `
                <div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`
    }

    document.getElementById("task-board").innerHTML = resultHtml;
}

addButton.addEventListener("click", addTask)


