
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("myDropdownTwo");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* window.onclick = function(event){
  document.onclick = function(e){
    if(e.target.id == 'backgroundOverlay'){
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
    if(e.target === openButton){
      popup.style.display = 'block';
        overlay.style.display = 'block';
    }
  };
}; */

window.onclick = function(event) {
  if (!event.target.matches('.list_add')) {
    var dropdowns = document.getElementsByClassName("name_file");
    var i = documen.getElementsByClassName('content');
   
      //console.log(typeof openDropdown.style.display)
      if(e.target.id == 'content'){
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
    if(e.target === dropdowns){
      popup.style.display = 'block';
        overlay.style.display = 'block';
    }
    
  }
}

  class taskFiles {

      clickTheDropDown() {      
              /* When the user clicks on the button,
            toggle between hiding and showing the dropdown content */
          document.getElementById('dropbtn').addEventListener('click', (event) => {   //clicking the dropdown btn
          document.getElementById("myDropdown").classList.toggle("show");
        
          })
      };

      dropDownMenu() {
    }

      ifThisWorks() {
    }

      runAllTheStuff() {
          //this.dropDownMenu();
          //this.ifThisWorks();
          this.clickTheDropDown();
      }

  }


let sendTaskFiles = new taskFiles();

sendTaskFiles.runAllTheStuff();
