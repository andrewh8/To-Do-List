import main from './index.js';
import tasks from './tasks';
import projects from './projects.js';

const display = (() => {

    function displayProjectList(){
        // clear the main element
        while (main.firstChild){
            main.removeChild(main.lastChild);
        }
        // loop through the projectList and create associated DOM elements
        for (let i = 0; i < projects.projectList.length; i++){
            // create an element for each project
            const projectElement = document.createElement('div');
            projectElement.classList.add('projectElement');
            // create a title element for each project
            const projectTitle = document.createElement('div');
            projectTitle.classList.add('projectTitle');
            projectTitle.textContent = `${projects.projectList[i].name}`;
            projectElement.appendChild(projectTitle);
            // create a taskList element for each project
            const projectTasks = document.createElement('div');
            projectTasks.classList.add('projectTasks');
            // add the project taskList elements to the project taskList
            for (let j = 0; j < projects.projectList[i].taskList.length; j++){
                const taskElement = document.createElement('div');
                taskElement.classList.add('taskElement');
                const taskTitle = document.createElement('div');
                taskTitle.textContent = `${projects.projectList[i].taskList[j].title}`;
                taskTitle.classList.add('taskTitle');
                taskElement.appendChild(taskTitle);

                const taskDescription = document.createElement('div');
                taskDescription.textContent = `Description: ${projects.projectList[i].taskList[j].description}`;
                taskElement.appendChild(taskDescription);

                const taskDueDate = document.createElement('div');
                taskDueDate.textContent = `Due Date: ${projects.projectList[i].taskList[j].dueDate}`;
                taskElement.appendChild(taskDueDate);

                const taskPriority = document.createElement('div');
                taskPriority.textContent = `Priority: ${projects.projectList[i].taskList[j].priority}`;
                taskElement.appendChild(taskPriority);

                const taskNotes = document.createElement('div');
                taskNotes.textContent = `Notes: ${projects.projectList[i].taskList[j].notes}`;
                taskElement.appendChild(taskNotes);

                const taskChecklist = document.createElement('div');
                taskChecklist.textContent = `Checklist: ${projects.projectList[i].taskList[j].checklist}`;
                taskElement.appendChild(taskChecklist);
                
                projectTasks.appendChild(taskElement);
            }
            projectElement.appendChild(projectTasks);
            // add each project to the main element
            main.appendChild(projectElement);
        }
    }


    return { displayProjectList };
})()

export default display;