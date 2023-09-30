const newTask = document.querySelector("#input-box");
const taskList = document.querySelector(".todoTaskList");
const addTaskBtn = document.querySelector("button");
// console.log(taskList);

addTaskBtn.addEventListener("click", () => {
  if (newTask.value === "") {
    alert("Enter your task before adding.");
  } else {
    let todoTask = document.createElement("div");
    todoTask.classList.add("todoTask");
    todoTask.innerHTML = `
        <div class="task">
        ${newTask.value}
        </div>
        <div class="delete-icon">
        <i class="bi bi-trash3"></i>
        </div>
        `;
    taskList.appendChild(todoTask);
    
    todoTask.querySelector(".delete-icon").addEventListener("click", () => {
      //   console.log("hiii");
      todoTask.remove();
    });
  }
  newTask.value = "";
});
