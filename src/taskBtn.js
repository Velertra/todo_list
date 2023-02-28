import { runMenuDiv } from "./menuDiv"

let myAddedFiles = []



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
        let p = myAddedFiles.length.toString();
        const taskFile = document.getElementsByName(p);
        taskFile.forEach((task) => {
            task.addEventListener('click', () => {
                let runner = new Taskbtn;
                runner.setNameAtt(task);
                //console.log(task)
            });
        });
    };

    setNameAtt(sheshe) {
       
    }
    createFileSlot() {
       // let touchy = task.length
       // console.log(touchy)
       let p = myAddedFiles.length.toString();
       console.log(p);
        let content = document.createElement("div");
        content.setAttribute("id", "multi_task");
        content.classList.add("multi_task");
        content.setAttribute('name', p);
        content.innerHTML = ' ' + myAddedFiles[p - 1] ;
        main_task.appendChild(content) 
        
    }
    
    needATest() {
            document.getElementById('list_add').addEventListener("click", function(){ 
                let creation = new Taskbtn();
                creation.openFileDiv();
                
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
        document.getElementById('send_file').addEventListener("click", function() { 
            let runItPlus = new Taskbtn();
            runItPlus.closeFileDiv();
            runItPlus.collectFileName();
            runItPlus.createFileSlot();
            //runMenuDiv.taskMenu();
            runItPlus.fileBtn();
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

        //this.pushToDrop();
        myAddedFiles.push(this.fileName);
    }
    
    pushToDrop() {
        let content = document.createElement('div');
        content.setAttribute('href', "#");
        content.classList("menubtn")
        myDropdown.appendChild(content);
    }
    playAll() {
        this.addListDiv();
        this.needATest();
        this.newFileDiv();
        this.createThisDiv();
        //this.pushToDrop();
        
    }
};




let runIt = new Taskbtn();

runIt.playAll();

export { myAddedFiles };