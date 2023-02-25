import { finsihedProd } from "./clickOnTask"


let taskArray = [];


function testersPlus(title, describe, dueDate, notes) {
    this.title = title
    this.describe = describe
    this.dueDate = dueDate
    this.notes = notes
    this.makeItWork = function() {
        console.log(title + ' ' + describe)
    }
    
}


class Btnfunct {
    
        addTask() {
            document.querySelector("#add_task").addEventListener('click', () => {
                this.openForm();
        })
    }

        submitBtn() {
          document.getElementById("pop_up_form").addEventListener ('submit', function(event) {
            event.preventDefault();
            let submitCallBtn = new Btnfunct();
            submitCallBtn.submitCall();
            
        });
    };
    
        
        
        gangGang(title, describe, dueDate, notes) {
            let p = new testersPlus(title, describe, dueDate, notes);
            taskArray.push(p);
            //console.log(taskArray)
            //hopefulTest.makeItWork();
            
        }
       

        collectValues() {
            this.title = document.getElementById("title").value;            // pause the submit to store as            
            document.getElementById('title').value = '';                          //variable. then removes text.
          
            this.describe = document.getElementById('description').value;               //function pulls value from the form 
            document.getElementById('description').value = '';

            this.dueDate = document.getElementById('due_date').value; 
            document.getElementById('due_date').value = '';

            this.notes = document.getElementById('notes').value;
            document.getElementById('notes').value = ''; 
            //evt.preventDefault();

            this.gangGang(this.title, this.describe, this.dueDate, this.notes)
            
            
            this.arrayPush();
        }

        arrayPush() {
            /* for(let i = 0; i < taskArray.length ; i++) {
                let content = document.createElement("div");                //goes through 'taskArray' and creates divs for each one.
                content.setAttribute("id", "task_array");
                content.classList.add("task_array");
                content.setAttribute("name", i);
                
                task_tab.appendChild(content)
            };      */
           
            
            var crsq = document.createElement('div');
            crsq.classList.add('task_array');
            crsq.setAttribute('id', "task_array");
            crsq.setAttribute('name', taskArray.length);

            //document.getElementsByTagName(taskArray.length) = taskArray.length
            document.getElementsByClassName("task_tab")[0].appendChild(crsq);
           // runIt.taskBtn(); //

            crsq.innerHTML = (taskArray.length);
            
            finsihedProd.taskBtn();
           
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
           // this.testersPlus('joejoe', 'center')
        }
    };





   // console.log(sheCute());

    //sheCute();

let trial = new Btnfunct();

trial.placeBtn();

export { taskArray };
export { Btnfunct };
export { testersPlus };