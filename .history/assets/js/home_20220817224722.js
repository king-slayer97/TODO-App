console.log(`This is home.js`);

let categoryContainer = document.querySelectorAll(".task-category");
console.log(categoryContainer);

//changing the date format
let dueDates = document.querySelectorAll(".task-date");
console.log(dueDates);
for (let i = 0; i < dueDates.length; i++) {
  var mydate = new Date(dueDates[i].innerText);
  console.log(mydate);
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][mydate.getMonth()];
  let str;
  if (month === undefined) {
    str = "No Deadline";
  } else {
    str = month + " " + mydate.getDate() + ", " + mydate.getFullYear();
}
    dueDates[i].innerText = str;
}

//Maintaining the color of the Category
for (let category of categoryContainer) {
  if (category.innerText == "SCHOOL") {
    category.style.backgroundColor = "#f2a700";
  } else if (category.innerText == "WORK") {
    category.style.backgroundColor = "#9c00af";
  } else if (category.innerText == "PERSONAL") {
    category.style.backgroundColor = "#3f51b5";
  } else {
    category.style.display = "none";
  }
}

var checkedBoxes = document.querySelectorAll('input[name="taskItem"]');
console.log(checkedBoxes);

//Adding event listeners for striking off the checked task
for (let i = 0; i < checkedBoxes.length; i++) {
  let id = checkedBoxes[i].defaultValue;
  let elements = document.querySelectorAll(`.strike-${id}`);
  elements.forEach(function (element) {
    element.style.marginLeft = "10px";
  });
  checkedBoxes[i].addEventListener("click", function () {
    if (checkedBoxes[i].checked) {
      elements.forEach(function (element) {
        element.style.textDecoration = "line-through";
        element.style.opacity = "0.5";
      });
    } else {
      elements.forEach(function (element) {
        element.style.textDecoration = "none";
      });
    }
    // document.querySelector(`#${checkedBoxes[i].defaultValue}`).
    // if(document.querySelectorAll('input[name="taskItem"]:checked')){
    //     let elements = document.querySelectorAll('.strike');
    //     console.log(elements);
    // }
    console.log(`Inside Event Listener`);
  });
}
