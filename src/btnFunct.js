
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

        closeForm() {
            document.getElementById("pop_up_form").style.display = "none";
            
            console.log("MyWifeAndKids");
            
        }
    
        collectValues() {

        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxked");
        

            const titleNeeded = document.getElementById("title").value;            // pause the submit to store as
                                                                                    //variable. then removes text.
                                                     
            document.getElementById('title').value = '';
            console.log(titleNeeded);
        /*     
            authorNeeded = document.getElementById('author').value;               //function pulls value from the from 
            evt.preventDefault();
            document.getElementById('author').value = '';

            pagesNeeded = document.getElementById('pages_read').value;    
            evt.preventDefault();
            document.getElementById('pages_read').value = '';

            readNeeded = document.getElementById('finished_pages').value;    
            evt.preventDefault();
            document.getElementById('finished_pages').value = ''; 
               */

    }

    openForm() {
        document.getElementById('pop_up_form').style.display = "block";
        console.log("finally")
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

