
class Taskdiv {
    multiTasks() {
        let arrayTask = ["first task", "second task"];

        for(let i = 0; i < 3/* arrayTask.length */; i++) {
                let content = document.createElement("div");
                content.setAttribute("id", "task_array");
                content.classList.add("task_array");
                task_tab.appendChild(content) 
        };
    };

}

let taskDiv = new Taskdiv();

taskDiv.multiTasks();
