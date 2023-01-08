let input = document.querySelector('.input');
let addBtn = document.querySelector('.addBtn');
let taskList = document.querySelector('.taskList');
let tasksContainer = document.querySelector('.tasksContainer');
let taskNumber = document.querySelector('.taskNumber');
let doneTaskNumber = document.querySelector('.doneTaskNumber')

function taskNumberReset(){
    let tasklength = document.getElementsByClassName('task').length;
    taskNumber.innerHTML = tasklength;

    let doneTask = document.getElementsByClassName('done').length;
    doneTaskNumber.innerHTML = doneTask;
}
taskNumberReset();

function createTask(text){
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

input.addEventListener("keydown" , (event)=>{
    if(event.code == 'Enter'){
        taskSave();
    }
})

addBtn.addEventListener('click' , taskSave);

function taskSave(){

    if(input.value.trim() == ""){
        alert("input cant be empty!!!");
        input.value = ''
    }
    else{
        let element = createTask(input.value);
        element.classList.add('task');
        element.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
        taskList.appendChild(element);
        input.value = '';
    }
    taskNumberReset();

}

taskList.addEventListener('click' , (event)=>{
    console.log(event.target.nodeName);
    if(event.target.nodeName === 'I'){
        let deletedLi = event.target.parentElement.parentElement;
        taskList.removeChild(deletedLi); 
        taskNumberReset();
    }
    if(event.target.nodeName === 'LI'){
        event.target.classList.toggle('done');
        taskNumberReset();
    }
})