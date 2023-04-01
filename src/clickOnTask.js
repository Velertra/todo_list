import { neededArr, finalArr, completeInfoArr, addFileName } from "./taskBtn"
import { testersPlus } from "./btnFunct";



class clickOnTask {

    openTask() {
        document.getElementById('task_display').style.display = "block";  
    }
    closeTask() {
        document.getElementById("task_display").style.display = "none";   
    }
  /*   taskBtn() {
        let p = hopeful.length.toString();
        const taskBtn = document.getElementsByName(p);
     
        
           taskBtn.forEach((task) => {
            task.addEventListener('click', () => {          //when you push the green divs created to rep tasks
                this.openTask();
                this.onTheTaskForm(task);
                
                
                
            })
        }) 
    }*/

    goThruTasks() {
        //document.querySelectorAll('#task_tab [id$=]').length
        //for(let i = 0; i < )

    }

    runThisFirst(oz, cocomo) {
         //let shishi = document.querySelectorAll('#task_tab [id$=task_array]').length
       /*  let gonnaWork = new testersPlus();
        gonnaWork.makeItWork(); */
        
       let buffy = oz.getAttribute('name');
       let replace = buffy.slice(-1);

      //console.log(oz)
      

      let runner = finalArr.filter(x => {
        return x.fileName === neededArr;        //runner returns array filetered by the name of whatever file that was clicked
    })

    for(let x = 0; x < runner.length; x++){
        //console.log(runner[x])
      }

      let hopeful = runner[replace];
      //let jsonTrial = JSON.stringify(hopeful)
      console.log(hopeful.arr.title)

      this.onTheTaskForm(hopeful);

    }

    onTheTaskForm(chyea) {

       console.log(chyea)

      
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
            topDiv.innerHTML = "Task: " + hopeful.arr.title;
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
            describeDiv.innerHTML = "Describe: " + hopeful.arr.describe;
            body_div.appendChild(describeDiv);
        }
        this.notesDiv = function() {
            let notes = document.createElement('div');
            notes.classList.add("discription");
            notes.setAttribute('id', 'discription');
            notes.innerHTML = 'Notes: ' + hopeful.arr.notes;
            body_div.appendChild(notes);
        }
        this.dueDiv = function() {
            let dueDiv = document.createElement('div');
            dueDiv.classList.add('date_div');
            dueDiv.setAttribute('id', 'date_div');
            dueDiv.innerHTML = 'Due Date: ' + hopeful.arr.dueDate;
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
                //console.log( hopeful[0].title)
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



export { finsihedProd };