



class taskFiles {

    clickTheDropDown() {
        document.getElementById('dropdown').addEventListener('click', () => {
            this.dropDownMenu();
        } )
    }

    dropDownMenu() {
      /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
      function dropDown() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

      // Close the dropdown menu if the user clicks outside of it
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
    }

    ifThisWorks() {

    }

    runAllTheStuff() {
       // this.dropDownMenu();
        this.ifThisWorks();
        this.clickTheDropDown();
    }
}


let sendTaskFiles = new taskFiles();
/* 
sendTaskFiles.runAllTheStuff(); */