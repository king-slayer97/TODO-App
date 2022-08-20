console.log(`This is home.js`);

let categoryContainer = document.querySelectorAll(".task-category");
console.log(categoryContainer);

for(let category of categoryContainer){
    if(category.innerText=="SCHOOL"){
        category.style.backgroundColor = "#f2a700";
    }
    else if(category.innerText=="WORK"){
        category.style.backgroundColor =
    }
}