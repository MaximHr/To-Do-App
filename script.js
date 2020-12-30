const input = document.querySelector('input');
const btnAdd = document.querySelector('.btn-add');
const btnClear = document.querySelector('.btn-clear');
const ul = document.querySelector('ul');

let todo = JSON.parse(localStorage.getItem('task'));  
if(todo !== null){ 
    for(let i = 0;i < todo.length;i++){
        add(todo[i], true)
    }
}

btnAdd.addEventListener('click', (e)=>{
    add(input.value, false);
})
btnClear.addEventListener('click', ()=>{
    localStorage.clear();
    todo = null;
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})
ul.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fas')){
        const index = Array.prototype.indexOf.call(ul.children, e.target.parentNode);
        e.target.parentNode.remove();
        todo.splice(index, 1);
        localStorage.setItem('task', JSON.stringify(todo));
    }
})
function add(text, isItFirst){
    if(text.replaceAll(' ', '') !== ''){
        const task = document.createElement('li');
        task.innerHTML = `<span>${text}</span><i class='fas fa-trash-alt'></i>`;
        document.querySelector('ul').appendChild(task); 
        input.value = '';
        if(todo === null){
            todo = [];
        }
        if(!isItFirst){ 
            todo.push(text);
            localStorage.setItem('task', JSON.stringify(todo));
        }
    }
}
















//replace - for exercise
const oldHeading = document.querySelector('.title');
const newHeading = document.createElement('div');
newHeading.setAttribute('class', 'title');
newHeading.appendChild(document.createTextNode('To Do List'));
const parent = document.querySelector('.card');
parent.replaceChild(newHeading, oldHeading);