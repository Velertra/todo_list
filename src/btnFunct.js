
import { Taskbtn } from "./taskBtn"




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

            let neededToRun = new Taskbtn();
            neededToRun.gangGang(this.title, this.describe, this.dueDate, this.notes)
            
            //console.log(neededArr)
            //this.createCompleteArray(the_name_of_filebtn);
            
            
           // this.arrayPush();
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

export { Btnfunct };