// 1. Adding New Tasks
// Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
// Include an “Add Task” button that will add the task to the task list.
// Each task should be stored as an object with properties such as task name, category, deadline, and status.
// Add the task object to an array that holds all tasks.

// 2. Displaying the Task List
// Create an HTML structure (such as an unordered list or table) to display the task list.
// For each task, display the task name, category, deadline, and status.
// Dynamically update the task list in the browser each time a new task is added or a status is updated.

const taskNameInput = document.getElementById("taskName")
const taskCategotyInput = document.getElementById("taskCategoty")
const taskDeadlineInput = document.getElementById("taskDeadline")
const taskStatusInput = document.getElementById("taskStatus")
const addTaskButten = document.getElementById("butten")
const taskBodyTable = document.getElementById("taskTbody")
// console.log(taskNameInput);
// console.log(taskCategotyInput);
// console.log(taskStatusInput);
// console.log(addTaskButten);


let tasks = []

function addTask() {
    const name = taskNameInput.value
    const category = taskCategotyInput.value
    const deadline = taskDeadlineInput.value
    const status = taskStatusInput.value
    //group together parts of task to make a whole task
    const newTask = {
        name,
        category,
        deadline,
        status
    }


    //take task and put into out tasks list
    tasks.push(newTask)
    console.log(tasks);
    displayTasks()

    //clear input
    taskNameInput.value = ""
    taskCategotyInput.value = ""
    taskDeadlineInput.value = ""
    taskStatusInput.value = ""
}
//create a function to display put task
function displayTasks(){

taskBodyTable.innerHTML = ""   

//take the task list and for every item in the list show each one
tasks.forEach(task => {
// //create  a li
// const li = document.createElement("li")
// //add the taskName to the innerHTML of our li
// li.innerHTML = task.name
// //append  the created li to our list
// taskBodyUl.appendChild(li)

//create new table row
const tr = document.createElement('tr')
//add all our tasks to out tr
//task Name
const nameTData = document.createElement('td')
//add the user input to the element
nameTData.textContent = task.name
//append td to the te
tr.appendChild(nameTData)

// task catagory
 const categoryTData = document.createElement('td')
 categoryTData.textContent = task.category
 tr.appendChild(categoryTData)

 //task deadline
 const deadlineTData = document.createElement('td')
 deadlineTData.textContent = task.deadline
 tr.appendChild(deadlineTData)
//task status
 const statusTData = document.createElement('td')
 statusTData.textContent = task.status
 tr.appendChild(statusTData)

//append the entire row to the table body
taskBodyTable.appendChild(tr)



})

}


//take the addTask function and add it onto out button with an add event listener
addTaskButten.addEventListener(`click`, addTask)
