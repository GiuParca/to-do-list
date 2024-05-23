const taskNameInput = document.querySelector('#taskName');
const taskDescriptionInput = document.querySelector('#taskDescription');
const taskButton = document.querySelector('#taskSubmit');
const taskList = document.querySelector('#taskList');


taskButton.addEventListener('click', () => {
    const tableRow = document.createElement('tr')
    const newTask = document.createElement('td');
    const taskDescription = document.createElement('td');

    newTask.innerText = taskNameInput.value;
    taskDescription.innerText = taskDescriptionInput.value;

    tableRow.appendChild(newTask); 
    tableRow.appendChild(taskDescription);

    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    document.getElementById("taskList").appendChild(tableRow);

    const taskStatus = document.createElement('td');
    taskStatus.innerText = "incomplete";
    tableRow.appendChild(taskStatus);

    const taskDone = document.createElement('td');
    taskDone.innerHTML = '<button><i class="fa-solid fa-check"></i></button>';
    tableRow.appendChild(taskDone);

    const taskDelete = document.createElement('td');
    taskDelete.innerHTML = '<button><i class="fa-solid fa-trash"></i></button>';
    tableRow.appendChild(taskDelete);
    

    taskDelete.addEventListener('click', () =>{
        taskList.removeChild(tableRow);
    })

    taskDone.addEventListener('click', () => {
        if (taskStatus.innerText === "incomplete") {
            tableRow.style.background = 'green';
            taskStatus.innerText = "complete";
        } else {
            tableRow.style.background = '';
            taskStatus.innerText = "incomplete";
        }
    });

    toggleTableHead();
});

function toggleTableHead() {
    if (taskList.children.length > 0) {
        tableHead.style.display = 'table-header-group';
    } else {
        tableHead.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    tableHead.style.display = 'none';
});


