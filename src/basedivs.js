 //import "./baseDiv.css";


 class Basedivs {
    addClass() {
        let contentDiv = document.getElementById("content");
        contentDiv.classList.add("content"); 
    }
    menuTab() {
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("menu_tab");
        contentDiv.setAttribute("id", "menu_tab");
        content.appendChild(contentDiv);

    }
    taskTab() {
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("task_tab");
        contentDiv.setAttribute("id", "task_tab");
        content.appendChild(contentDiv);
    }
    runAll() {
        this.addClass();
        this.menuTab();
        this.taskTab();

        
    }

 }

 let runIt = new Basedivs();

 runIt.runAll();
 