console.log(`This is home.js`);

let categoryContainer = document.querySelectorAll(".task-category");
console.log(categoryContainer);

//changing the date format
let dueDates = document.querySelectorAll(".task-date");
console.log(dueDates);
// var mydate = new Date(dueDates.innerText);
console.log(mydate);
// var month = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
// var str = month + ' ' + mydate.getFullYear();

//Maintaining the color of the Category
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

var checkedBoxes = document.querySelectorAll('input[name="taskItem"]');
console.log(checkedBoxes);


for(let i=0; i<checkedBoxes.length; i++){
    let id = checkedBoxes[i].defaultValue;
    let elements = document.querySelectorAll(`.strike-${id}`);
    checkedBoxes[i].addEventListener('click',function(){
        if(checkedBoxes[i].checked){
            elements.forEach(function(element){
                element.style.textDecoration = 'line-through';
            });          
        }
        else{
            elements.forEach(function(element){
                element.style.textDecoration = 'none';
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