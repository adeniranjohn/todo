const inputs = document.getElementById('inputs');
const save = document.getElementById('save')
const todo = document.getElementById('todo');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'  ,hour12: true };
const today = new Date().toLocaleString('en-US', options);
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
            todoSection.innerHTML += `<li><span class='todo'>${todo.value}</span> <span class='date'> ${(todo.date)} </span></li>`;
        })
    }
   
})




save.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputTodo.value == 'null'){

    }else{
        todoObj = {
            'value': inputTodo.value,
            'date': today.toLocaleString(),
            'status': ''

        }
        mytodos.push(todoObj);
        todoStorage.setItem('todos', JSON.stringify(mytodos));
        location.reload();
        inputTodo.value = '';
       
        console.log(mytodos);
    }
    
})

