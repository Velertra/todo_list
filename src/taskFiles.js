
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  class taskFiles {

      

      clickTheDropDown() {      
              /* When the user clicks on the button,
            toggle between hiding and showing the dropdown content */
          document.getElementById('dropbtn').addEventListener('click', (event) => { 
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
