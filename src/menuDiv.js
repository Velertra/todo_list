

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
    allDivs() {
        this.addTask();
        this.mainTask();
    }
}

let runMenuDiv = new Menudiv();

runMenuDiv.allDivs();