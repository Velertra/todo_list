import {taskArray} from "./btnFunct"




class clickOnTask {


    openTask() {
        //let p = taskArray.length.toString();
        
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
                this.onTheTaskForm();
            })
        })
    }
    onTheTaskForm() {
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
            topDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur";
            body_div.appendChild(topDiv); 
            
            
        }          
        this.centerImg = function() {
            let mainPic = document.createElement("img");                    //three divs built for main page
            mainPic.classList.add("main_pic")
            body_div.appendChild(mainPic);
            mainPic.src = "https://picsum.photos/200/301";
            
        } 
        this.describeDiv = function() {
            let disDiv = document.createElement('div');
            disDiv.classList.add("discription");
            disDiv.setAttribute('id', 'discription');
            disDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            body_div.appendChild(disDiv);
    
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
           // console.log('chochocho')
            document.getElementById('remove_task').addEventListener("click", function(){ 
                let finisher = new clickOnTask();

                finisher.closeTask(); 
            })
        }

       /*    this.allTheDivs = function() {
            //this.contentClass();
            let contentLength = document.getElementsByClassName("body_div");
    
            if(contentLength.length > 0){
                let trailDiv = document.querySelector("#body_div");
                    this.removeDiv(trailDiv);
                    this.headline();
                    this.centerImg();
                    this.describeDiv(); 
    
             } else {
                    
                    this.bodyDiv();
                    this.headline();
                    this.centerImg();
                    this.describeDiv();
                };  
                }*/
                return [this.bodyDiv(),
                this.headline(), this.centerImg(), this.describeDiv(), this.deleteBtn()]
            
    }
   
}




let finsihedProd = new clickOnTask();

export { finsihedProd };