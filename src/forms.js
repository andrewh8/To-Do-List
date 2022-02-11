import main from './index.js';
import tasks from './tasks.js';
import projects from './projects.js';

const forms = (() => {

    function closeForm(){
        while (main.firstChild){
            main.removeChild(main.lastChild);
        }
    }

    function openTaskForm(){
        let taskForm = document.createElement('div');
        taskForm.classList.add("formBackground");
        // create dropdown list for projects available in projectList
        let projectOptions = '';
        for (let i = 0; i < projects.projectList.length; i++){
            projectOptions +=
            `<option value="${projects.projectList[i].name}">${projects.projectList[i].name}</option>`;
        }
        // create form fields for entry
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
                    <input type="text" name="description" id="taskDescription">
                </div>
                <div>
                    <label>Due Date</label>
                    <input type="text" name="dueDate" id="taskDueDate">
                </div>
                <div>
                    <label>Priority</label>
                    <input type="text" name="priority" id="taskPriority">
                </div>
                <div>
                    <label>Notes</label>
                    <input type="text" name="notes" id="taskNotes">
                </div>
                <div>
                    <label>Checklist</label>
                    <input type="text" name="checklist" id="taskChecklist">
                </div>
                <div>
                    <label>Project</label>
                    <select name="project" id="taskProject">`
                    +
                        projectOptions
                    +
                    `</select>
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
        // obtain values entered into the form
        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDescription').value;
        const dueDate = document.querySelector('#taskDueDate').value;
        const priority = document.querySelector('#taskPriority').value;
        const notes = document.querySelector('#taskNotes').value;
        const checklist = document.querySelector('#taskChecklist').value;
        const project = document.querySelector('#taskProject').value;
        console.log(`project = ${project}`);
        // create a task object based on form entries, add it to the taskList, assign it to a project, close form
        const task = tasks.newTask(title, description, dueDate, priority, notes, checklist, project); 
        tasks.addToTaskList(task);
        projects.addTaskToProject(task);
        console.log(tasks.taskList);
        console.log(projects.projectList);
        closeForm();
    }

    function openProjectForm(){
        let projectForm = document.createElement('div');
        projectForm.classList.add("formBackground");
        projectForm.innerHTML = 
        `<div class="form">
            <div>
                <div class="closeButton">+</div>
                Add a Project
            </div>
            <form id="projectForm">
                <div>
                    <label>Title</label>
                    <input type="text" name="title" id="projectTitle" required>
                </div>
                <button>Submit</button>
            </form>
        </div>`;
        main.appendChild(projectForm);
        // add event listeners for closing or submitting the form
        const closeButton = document.querySelector('.closeButton');
        closeButton.addEventListener('click', closeForm)
        let form = document.querySelector('#projectForm');
        form.addEventListener('submit', submitProjectForm);
    }

    function submitProjectForm(e){
        e.preventDefault();
        // assign form values to a project, push project to projectList, and close the form
        const name = document.querySelector('#projectTitle').value;
        const project = projects.newProject(name); 
        projects.addToProjectList(project);
        console.log(projects.projectList);
        closeForm();
    }

    return { openTaskForm, openProjectForm };
})()

export default forms;
