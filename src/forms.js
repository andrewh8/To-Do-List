import tasks from './tasks.js';
import main from './index.js';

const forms = (() => {

    function closeForm(){
        while (main.firstChild){
            main.removeChild(main.lastChild);
        }
    }

    function openTaskForm(){
        let taskForm = document.createElement('div');
        taskForm.classList.add("formBackground");
        taskForm.innerHTML = 
        `<div class="form">
            <div>
                <div class="closeButton">+</div>
                Add a Task
            </div>
            <form id="taskForm">
                <div>
                    <label>Title</label>
                    <input type="text" name="title" id="taskTitle" required>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" id="taskDescription" required>
                </div>
                <button>Submit</button>
            </form>
        </div>`;
        main.appendChild(taskForm);
        // add event listeners for closing or submitting the form
        const closeButton = document.querySelector('.closeButton');
        closeButton.addEventListener('click', closeForm)
        let form = document.querySelector('#taskForm');
        form.addEventListener('submit', submitTaskForm);
    }

    function submitTaskForm(e){
        e.preventDefault();
        // assign form values to a task, push task to taskList, and close the form
        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDescription').value; 
        const task = tasks.newTask(title, description); 
        tasks.addToTaskList(task);
        console.log(tasks.taskList);
        closeForm();
    }

    return { openTaskForm };
})()

export default forms;