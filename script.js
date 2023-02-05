const toDoInput = document.querySelector('.to-do__get-input');
const toDoBtn = document.querySelector('.to-do__get-btn');
const taskList = document.querySelector('.to-do__tasks-list');
const checkedList = document.querySelector('.to-do__checked-list');


toDoBtn.addEventListener("click", checkingInput);
function checkingInput(){
   if(toDoInput.value !=''){
      createTask ();
   }
}
function createTask (){
   let val = toDoInput.value;
   let taskLi = document.createElement('li');
   let taskDiv = document.createElement('div');
   let taskLabel = document.createElement('label');
   let taskChecbox = document.createElement('input');
   taskChecbox.type = 'checkbox';
   let taskSpan = document.createElement('span');
   let taskText = document.createElement('p');
   taskText.innerHTML = `${val}`;
   let taskButton = document.createElement('button');
   taskButton.innerHTML = "Удалить"
   toDoInput.value = '';
   taskButton.addEventListener('click', del);
   taskChecbox.addEventListener('change', checking);
   function output () {
      assigningСlasses ();
      assembling ();
   }
   function assigningСlasses (){
      taskLi.classList.add('task');
      taskDiv.classList.add('task-content');
      taskLabel.classList.add('task-label');
      taskChecbox.classList.add('task-checkbox');
      taskSpan.classList.add('check-fake');
      taskText.classList.add('task-text');
      taskButton.classList.add('to-do__btn');
      taskButton.classList.add('delete');
   }
   function assembling () {
      taskLi.prepend(taskDiv);
      taskLi.append(taskButton);
      taskLabel.prepend(taskChecbox);
      taskLabel.append(taskSpan);
      taskDiv.prepend(taskLabel);
      taskDiv.append(taskText);
      taskList.prepend(taskLi);
   }
   function checking () {
      if(taskChecbox.checked){
         checkedList.prepend(taskLi);
      }
      else{
         taskList.prepend(taskLi);
      }
   }
   function del (){
      taskLi.remove();
   }
   output ();
};

