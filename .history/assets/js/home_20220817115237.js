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

var checkedBoxes = document.querySelectorAll('input[name="taskItem"]');
console.log(checkedBoxes);


for(let i=0; i<checkedBoxes.length; i++){
    checkedBoxes[i].addEventListener('click',function(){
        if(checkedBoxes[i].checked){
            let id = checkedBoxes[i].defaultValue;
            let elements = document.querySelectorAll(`.strike');
            
        }
        else{
            
        }
        // document.querySelector(`#${checkedBoxes[i].defaultValue}`).
        // if(document.querySelectorAll('input[name="taskItem"]:checked')){
        //     let elements = document.querySelectorAll('.strike');
        //     console.log(elements);
        // }
        console.log(`Inside Event Listener`);
    });
}