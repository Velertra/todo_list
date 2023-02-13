

class Taskbtn {
    fileBtn() {
        const taskFile = document.querySelectorAll("#multi_task");
        taskFile.forEach((task) => {
            task.addEventListener('click', () => {
                
                console.log(task)
            });
        });
    };

    /* taskBtn() {
        const taskBtn = document.querySelectorAll("task_array");
        taskBtn.forEach((task) => {
            task.addEventListener('click', () => {          //moved to btnFunct.js moducle
                console.log("taskBTN works")
            })
        })
    } */
    
    playAll() {
        this.fileBtn();
        //this.taskBtn();
    }
};


let runIt = new Taskbtn();

runIt.playAll();