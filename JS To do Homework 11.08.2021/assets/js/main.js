// const headings = document.querySelectorAll(".heading");
// headings.forEach(heading =>{
// const color = heading.getAttribute('data-color')
// heading.style.color = color;
// });


// const tabnavigations = Array.from(document.querySelectorAll(".tabs-navigation li"));
// const tabcontents = Array.from(document.querySelectorAll(".tabs-contents .tab-content"));
// const ClearActives = () =>{
//     tabnavigations.forEach(tabnavigation =>{
//         tabnavigation.classList.remove("active")
//     });
//     tabcontents.forEach(tabcontent =>{
//         tabcontent.classList.remove("active")
//     });
// }

// tabnavigations.forEach(tabnavigation =>{
//     tabnavigation.onclick = function(){
//         ClearActives();
//         const targetId = tabnavigation.getAttribute("data-target");
//         const targetContent = document.getElementById(targetId)
//         tabnavigation.classList.add("active");
//         targetContent.classList.add("active");
//     }
// })

const todoInput = document.querySelector("#todo-input")
const listGroupItems = document.querySelector("#todo-list");


    // Helper functions
    const clearInput = () => {
        todoInput.value = "";
    }
const listItemCreator = todo =>{
    const listElement = document.createElement("li");
    listElement.innerHTML = 
    `
        ${todo.text}
        <div>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Done</button>
            <button class="btn btn-warning">Edit</button>
        </div>
    ` ;

    listElement.setAttribute('data-id', todo.id)
    listGroupItems.append(listElement); 
}

const todos = [
    {
        id: 0,
        text: 'first todo',
        status: 'NOT_COMPLETED'
    },
    {
        id: 1,
        text: 'second todo',
        status: 'NOT_COMPLETED'
    }
];

let initialId = 2;

todos.forEach((todo) => {
    listItemCreator(todo);
})

document.addEventListener("click", function(e){ 
    if(e.target.className == "btn btn-danger"){ 
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.className == "btn btn-warning"){
       todoInput.value = e.target.parentElement.parentElement.innerText.split('\n')[0] ;
    }


})



todoInput.addEventListener('keydown', function(e)   {
    this.style.border = "1px solid red";
    
    switch (e.key) {
        case "Enter":  
            const todoObject = {
                id: ++initialId,
                text: this.value,
                status: 'NOT_COMPLETED'
            }
            todos.push(todoObject);
            listItemCreator(todoObject);
            clearInput(); 
            break;
        
        default:
            break;
    }


    // if(e.key.toLowerCase()===e.key){
    //     console.log("kicik herf"); 
    // }else{
    //     console.log("boyuk herf");
    // }
}) 


 