const toDoForm = document.getElementById('todo-form');
const toDolist = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

let toDos = [];

const TODOS_KEY = 'todos';

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerHTML = '❌';
    button.addEventListener('click', deleteToDo);
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
    const newToDo = toDoInput.value;
    event.preventDefault();
    toDoInput.value = '';
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
