import { runMenuDiv } from "./menuDiv"
import { finsihedProd } from "./clickOnTask";




let neededArr = [];

let completeInfoArr = [];

let addFileName = [];

let finalArr = [];

let friendlyArr = [];

let shouldWork = localStorage.getItem('collectFiles')

let anotherName = localStorage.getItem('home')

//let addFileName = JSON.parse(shouldWork);

//let finalArr = JSON.parse(anotherName);  



function fileRunThru(fileName) {
    this.fileName = fileName;
}

function testersPlus(title, describe, dueDate, notes) {
    this.title = title
    this.describe = describe
    this.dueDate = dueDate
    this.notes = notes
    this.makeItWork = function() {
        console.log(title + ' ' + describe)
    }
    
}

function sendFinalArr(fileName, arr){
    this.fileName = fileName
    this.arr = arr
    
};


class Taskbtn {

    newFileDiv() {
        let content = document.createElement("div");
        content.setAttribute("id", "name_file");
        content.classList.add("name_file");
        menu_tab.appendChild(content)
    }
    
    addListDiv() {
        let content = document.createElement("div");
        content.setAttribute("id", "list_add");
        content.classList.add("list_add");
        menu_tab.appendChild(content)
    }

    fileBtn() {
       // let e = addFileName.length.toString();
        //const taskBtn = document.getElementsByName(e);
        let friendlyArr = []

        let helper = document.querySelectorAll('.multi_task')
        for(let x = 0; x < helper.length; x++){
          
                helper[x].addEventListener("click", function() {        //btn on each blue div created for new files
                let runTheDisplay = new Taskbtn();                      
                runTheDisplay.setNameAtt(helper[x]);                
                runTheDisplay.taskBtn();
                //friendlyArr.push(helper[x])
                //runTheDisplay.runThisCode(friendlyArr);
           }); 
        };
        
    };

    runThisCode() {
        
    }

    taskBtn() {
        //let p = taskArray.length.toString();
        //const taskBtn = document.getElementsByName(p);
        let helper = document.querySelectorAll('.task_array')
        
        for(let x = 0; x < helper.length; x++){
          
                helper[x].addEventListener("click", function() {        //btn on each green div created for task Array
                finsihedProd.openTask();
                finsihedProd.runThisFirst(helper[x], friendlyArr)
           }) 
        };
    };

            

            setNameAtt(jojo) { 
                //let friendlyArr = [];
                friendlyArr = [];
                friendlyArr.push(jojo.innerHTML)
                //console.log(friendlyArr)
                neededArr = jojo.innerHTML;
                let runner = finalArr.filter(x => {
                    return x.fileName === neededArr;        //runner returns array filetered by the name of whatever file that was clicked
                })
                
                this.runThruArr(runner, friendlyArr);
                

                }
               
                
            runThruArr(cocomo, placeToGo) {
                //console.log(placeToGo)
                    let final = document.querySelector('#task_tab');
                    this.removeAllChildNodes(final);
                    

                    for(let i = 0; i < cocomo.length; i++ ) {
                    
                        var crsq = document.createElement('div');
                        crsq.classList.add('task_array');
                        crsq.setAttribute('id', "task_array");
                        crsq.setAttribute('name', 'task_array'+ '_' + i);
                        document.getElementsByClassName("task_tab")[0].appendChild(crsq);      //the green div created from tasks added
                        //crsq.innerHTML = (completeInfoArr.length);
                        } 
                }

                fullArrDiv() {
                    
                    for(let x = 0; x < finalArr.length; x++){
                        var crsq = document.createElement('div');
                        crsq.classList.add('task_array');
                        crsq.setAttribute('id', "task_array");
                        crsq.setAttribute('name', 'task_array'+ '_' + x);
                        document.getElementsByClassName("task_tab")[0].appendChild(crsq);      //HOME DIVS
                        //crsq.innerHTML = (completeInfoArr.length);
                    }
                }
                

    
    gangGang(title, describe, dueDate, notes) {
        let p = new testersPlus(title, describe, dueDate, notes);
        completeInfoArr.push(p);
        
        let x = new sendFinalArr(neededArr, p);
        finalArr.push(x);

        localStorage.setItem('home', JSON.stringify(finalArr));
     
   
        
    }

    removeAllChildNodes(parent) {
         
            while (parent.firstChild) {
              parent.removeChild(parent.firstChild)
            }
          
    }

    homeBtnFunt() {
        document.getElementById('home_btn').addEventListener('click', function(){
            console.log('lawerbeast')                                                   //home Btn should show all tasks
            let needed = new Taskbtn();
            
            needed.fullArrDiv(finalArr);
            needed.taskBtn();
        })
    }

    createFileSlot() {
       // let touchy = task.length
        let p = addFileName.length.toString();
        let fileDisplay = document.querySelector('#main_task')
        this.removeAllChildNodes(fileDisplay);
            for (let x = 0; x < addFileName.length; x++){
                let content = document.createElement("div");
                content.setAttribute("id", "multi_task");
                content.classList.add("multi_task");            //adding name to newly added files
                content.setAttribute('name', 'multi_task'+ '_' + x);
                content.innerHTML = ' ' + addFileName[x].fileName ;
                main_task.appendChild(content) 
            }
            //this.fileBtn();
          
    }
    
    needATest() {
            document.getElementById('list_add').addEventListener("click", function(e){ 
                let creation = new Taskbtn();                                           //when you push the black button
                creation.openFileDiv();
                let expo = document.getElementById('content');
                if (!expo.contains(e.target)) {
                    container.style.display = 'none';
                }
            })
        }

    createThisDiv() {
        let content = document.createElement("input");
        content.setAttribute("id", "enter_name");
        content.classList.add("enter_name");
        content.setAttribute("type", "text")
        name_file.appendChild(content)

        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("id", "send_file");
        sendBtn.classList.add("send_file");
        sendBtn.innerHTML = "Add File"
        name_file.appendChild(sendBtn);
        document.getElementById('send_file').addEventListener("click", function() {     //Add File Btn inside new file pop up
            let runItPlus = new Taskbtn();
            runItPlus.closeFileDiv();
            runItPlus.collectFileName();
                runItPlus.createFileSlot();
                runItPlus.fileBtn();
            
        })
    }    

    closeAddedFile() {
        let content = document.createElement("buton");
        content.setAttribute("id", "close_add_file");
        content.classList.add("close_add_file");
        content.innerHTML = 'close';
        name_file.appendChild(content)
        content.addEventListener("click", function() {     //close add file form
            let runItPlus = new Taskbtn();
            runItPlus.closeFileDiv();
        })
    }

    openFileDiv() {
        document.getElementById('name_file').style.display = "block";
    }

    closeFileDiv() {
        document.getElementById('name_file').style.display = "none";
        
    }

    collectFileName() {
        this.fileName = document.getElementById("enter_name").value;            // pause the submit to store as            
        document.getElementById('enter_name').value = ''; 

        this.pushToDrop(this.fileName);
        let x = new fileRunThru(this.fileName);             // runs on add_file Btn to push new files into arr 
        addFileName.push(x);
       
        localStorage.setItem('collectFiles', JSON.stringify(addFileName));
        

        //this.createFileSlot();
    }
    
    pushToDrop(evt) {
        let worksFaSho = document.getElementsByClassName("dropdown-content")
        let content = document.createElement('a');
        content.setAttribute('id', evt);
        content.classList.add("evt")
        content.innerHTML = evt;
        myDropdown.appendChild(content);
    }
    playAll() {
        this.addListDiv();
        this.needATest();
        this.newFileDiv();
        this.createThisDiv();
        this.closeAddedFile();
        this.homeBtnFunt();
        //this.createFileSlot();
        //this.fileBtn();
        if(addFileName.length == null){
            this.createFileSlot();
            //console.log(addFileName)
            
        }
        //this.pushToDrop();
        
    }
};




let runIt = new Taskbtn();

runIt.playAll();


export { neededArr, finalArr, completeInfoArr, addFileName }
export {Taskbtn};