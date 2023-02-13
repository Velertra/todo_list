import {Taskdiv} from "./taskDiv"

class BtnFunct {
    addTask() {
        document.querySelector("#add_task").addEventListener('click', () => {
            
            this.openForm();
        })
    }

        submitBtn() {
          document.getElementById("pop_up_form").addEventListener ('submit', function(event) {
            event.preventDefault();
            
            let submitCallBtn = new BtnFunct();
            submitCallBtn.submitCall();
            
        });
    };
    
        holdArray() {
            this.taskArray = ["momomom", "ejejeej"];
            
        }

        collectValues() {
            this.holdArray();
            this.titleNeeded = document.getElementById("title").value;            // pause the submit to store as
            document.getElementById('title').value = '';                          //variable. then removes text.
            /* const let taskArray = []; tester = localStorage.setItem(titleNeeded, titleNeeded);
            
            const anotherTest = localStorage.getItem(titleNeeded);
             */
            
            this.discribe = document.getElementById('description').value;               //function pulls value from the from 
            document.getElementById('description').value = '';

            this.taskArray.push(this.titleNeeded);
            this.taskArray.push(this.discribe);
           this.arrayPush();

           // console.log(this.taskArray)

            //this.arrayPush()
            //console.log(this.taskArray);

 /*
            pagesNeeded = document.getElementById('pages_read').value;    
            evt.preventDefault();
            document.getElementById('pages_read').value = '';

            readNeeded = document.getElementById('finished_pages').value;    
            evt.preventDefault();
            document.getElementById('finished_pages').value = ''; 
               */
    }

    arrayPush() {

        for(let i = 0; i <  this.taskArray.length ; i++) {
            let content = document.createElement("div");
            content.setAttribute("id", "task_array");
            content.classList.add("task_array");
            task_tab.appendChild(content) 
        };     
    }

    flowThruArr() {
        for(let x = 0; x < this.taskArray.length; x++) {
            console.log('jojo')
        }
    }

    openForm() {
        document.getElementById('pop_up_form').style.display = "block";
        
    }

    closeForm() {
        document.getElementById("pop_up_form").style.display = "none";   
       
    }

    submitCall() {
        this.closeForm();
        this.collectValues();
    }
    
    

   
    placeBtn() {
        this.submitBtn();
        this.addTask();
    }
    
};

let trial = new BtnFunct();

trial.placeBtn();

export {BtnFunct};