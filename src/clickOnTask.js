import {taskArray} from "./btnFunct"
import { testersPlus } from "./btnFunct";



class clickOnTask {

    openTask() {
        document.getElementById('task_display').style.display = "block";  
    }
    closeTask() {
        document.getElementById("task_display").style.display = "none";   
    }
    taskBtn() {
        let p = taskArray.length.toString();
        const taskBtn = document.getElementsByName(p);
        taskBtn.forEach((task) => {
            task.addEventListener('click', () => {
                this.openTask();
                this.onTheTaskForm(task);
                
                
                
            })
        })
    }

    goThruTasks() {
        //document.querySelectorAll('#task_tab [id$=]').length
        //for(let i = 0; i < )

    }

    onTheTaskForm(oz) {

        //let shishi = document.querySelectorAll('#task_tab [id$=task_array]').length
       /*  let gonnaWork = new testersPlus();
        gonnaWork.makeItWork(); */
        
        let buffy = oz.innerHTML - 1;

       //console.log(taskArray[buffy].title)

        this.bodyDiv = function() {    
            let bodyContainer = document.createElement("div");
            bodyContainer.classList.add("body_div");
            bodyContainer.setAttribute('id', 'body_div');
            //let trailDiv = document.querySelector("#body_div");
            task_display.appendChild(bodyContainer);
        }  
        this.headline = function() {
            let topDiv = document.createElement('div');
            topDiv.classList.add("topDiv")
            topDiv.setAttribute('id', "topDiv")
            topDiv.innerHTML = "Task: " + taskArray[buffy].title;
            body_div.appendChild(topDiv);         
        }          
        /* this.centerImg = function() {
            let mainPic = document.createElement("img");                    //three divs built for main page
            mainPic.classList.add("main_pic")
            body_div.appendChild(mainPic);
            mainPic.src = "https://picsum.photos/200/301";     
        }  */
        this.describeDiv = function() {
            let describeDiv = document.createElement('div');
            describeDiv.classList.add("discription");
            describeDiv.setAttribute('id', 'discription');
            describeDiv.innerHTML = "Describe: " + taskArray[buffy].describe;
            body_div.appendChild(describeDiv);
        }
        this.notesDiv = function() {
            let notes = document.createElement('div');
            notes.classList.add("discription");
            notes.setAttribute('id', 'discription');
            notes.innerHTML = 'Notes: ' + taskArray[buffy].notes;
            body_div.appendChild(notes);
        }
        this.dueDiv = function() {
            let dueDiv = document.createElement('div');
            dueDiv.classList.add('date_div');
            dueDiv.setAttribute('id', 'date_div');
            dueDiv.innerHTML = 'Due Date: ' + taskArray[buffy].dueDate;
            body_div.appendChild(dueDiv);
        }
        this.removeDiv = function(parent) {
            while (parent.firstChild) {
              parent.removeChild(parent.firstChild)
            }
          };
        this.deleteBtn = function() {
            let ted = document.createElement('button');
            ted.setAttribute('id', 'remove_task')
            ted.classList.add("remove_task")
            ted.innerHTML = 'close'
            body_div.appendChild(ted)  
            this.btnFunct();
        }
        this.btnFunct = function() {
            document.getElementById('remove_task').addEventListener("click", function(){ 
                let finisher = new clickOnTask();
                finisher.closeTask(); 
            })
        }
    let contentLength = document.getElementsByClassName("body_div")
        if (contentLength.length > 0) {
                //console.log( taskArray[0].title)
                let divRemoval = document.querySelector("#body_div");
                this.removeDiv(divRemoval);
                return [this.dueDiv(), this.headline(), /* this.centerImg(), */ this.describeDiv(), this.notesDiv(), this.deleteBtn() ]
            } else {
                //console.log(typeof ozNum)
                return [this.bodyDiv(), this.dueDiv(), this.headline(), /* this.centerImg(), */ this.describeDiv(), this.notesDiv(), this.deleteBtn()]
            }
        }
    };




let finsihedProd = new clickOnTask();

//finsihedProd.finshedFunc();

export { finsihedProd };