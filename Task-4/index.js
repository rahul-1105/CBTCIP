const newTask = document.querySelector("#input-box");
const taskList = document.querySelector(".todoTaskList");
const addTaskBtn = document.querySelector("button");
const currentTask = document.querySelector("h4");
// console.log(taskList);

addTaskBtn.addEventListener("click", () => {
  if (newTask.value === "") {
    alert("Enter your task before adding.");
  } else {
    let todoTask = document.createElement("div");
    todoTask.classList.add("todoTask");
    todoTask.innerHTML = `
    <div class="task">
    <input type="checkbox" id="taskCompleted">
    ${newTask.value}
    </div>
    <button class="delete-icon">
    <i class="bi bi-trash3"></i>
    </button>
    `;
    taskList.appendChild(todoTask);

    // deleteBtn
    todoTask.querySelector(".delete-icon").addEventListener("click", (e) => {
      // console.log(hii);
      todoTask.remove();
    });

    // taskCompelted-checkbox
    // const taskCompelteCheckbox = document.querySelector("#taskCompleted");
    const task = document.querySelector(".task");
    
    todoTask.querySelector("#taskCompleted").addEventListener("click", (e) => {
      todoTask.classList.toggle("checked")
    });
  }
  newTask.value = "";
});
