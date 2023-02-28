import { myAddedFiles } from "./taskBtn.js"


class Menudiv {
    addTask() {
        let content = document.createElement("div");
        content.setAttribute("id", "add_task");
        content.classList.add("add_task");
        menu_tab.appendChild(content)
    }
    mainTask() {
        let content = document.createElement("div");
        content.setAttribute("id", "main_task");
        content.classList.add("main_task");
        menu_tab.appendChild(content)
    }
    taskMenu() {

        let content = document.createElement("div");
        content.setAttribute("id", "multi_task");
        content.classList.add("multi_task");
        
        main_task.appendChild(content) 
       
    };

    allDivs() {
        this.addTask();
        this.mainTask();
        //this.taskMenu();
    }
}

let runMenuDiv = new Menudiv();

runMenuDiv.allDivs();
export { runMenuDiv };