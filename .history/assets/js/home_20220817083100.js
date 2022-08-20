console.log(`This is home.js`);

let categoryContainer = document.querySelectorAll(".task-category");
console.log(categoryContainer);

for(let category of categoryContainer){
    if(category.innerText=="SCHOOL"){
        category.style.backgroundColor = "#f2a700";
    }
    else if(category.innerText=="WORK"){
        category.style.backgroundColor = "#9c00af";
    }
    else if(category.innerText=="PERSONAL"){
        category.style.backgroundColor = "#3f51b5";
    }
    else{
        category.style.display = "none";
    }
}

// var checkedBoxes = document.querySelectorAll('input[name="taskItem"]:checked');
// console.log(checkedBoxes);
function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i]);
       }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  }
  
  // Call as
  var checkedBoxes = getCheckedBoxes("taskItem");
  console.log(first)