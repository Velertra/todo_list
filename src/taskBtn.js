

class Taskbtn {
   
    fileBtn() {
        const taskFile = document.querySelectorAll("#multi_task");
        taskFile.forEach((task) => {
            task.addEventListener('click', () => {
                
                console.log(task)
            });
        });
    };

 /*    taskBtn() {
        const taskBtn = document.querySelectorAll("#task_array");
        taskBtn.forEach((task) => {
            task.addEventListener('click', () => {
                console.log("taskBTN works")
            })
        })
    } */
    
    needATest() {
        console.log('left right center')
    }
    
    playAll() {
        this.fileBtn();
        //this.taskBtn();
       // this.taskBtn();
    }
};




let runIt = new Taskbtn();

runIt.playAll();
//export {runIt};