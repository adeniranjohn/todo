const addInput = document.getElementById('add');
const inputs = document.getElementById('inputs');
const savebtn = document.getElementById('save')
const todo = document.getElementById('todo');

const today = new Date();
const todoStorage = window.localStorage;
const todoSection = document.querySelector('ul#todos')
let mytodos;




window.addEventListener('load', (event) => {
    console.log('its loading');
    if(todoStorage.getItem('todos') == null){
        console.log("no todos");
        mytodos = [];
    }else{
        
        mytodos =JSON.parse(todoStorage.getItem('todos'));
        console.log(mytodos);
        mytodos.forEach((todo) => {
            todoSection.innerHTML += `<li>${todo}</li>`;
        })
    }
   
})

addInput.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked");

})


savebtn.addEventListener('click', (event) => {
    event.preventDefault();
    mytodos.push(todo.value);
    todoSection.innerHTML += `<li>${todo.value}</li>`  
    todo.value = '';
    todoStorage.setItem('todos', JSON.stringify(mytodos));
    console.log(mytodos);
})

function displayTodos() {
    display.innerHTML = todos
}