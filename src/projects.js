const projects = (() => {

    // array for holding project objects
    const projectList = [];

    // factory for creating project objects
    const newProject = (name) => {
        let taskList = [];
        return { name, taskList };
    }

    function addToProjectList(project){
        projectList.push(project);
    
    }

    // initialize projectList with a project for unassigned tasks
    const unassigned = newProject('Unassigned');
    projectList.push(unassigned);


    function addTaskToProject(task){
        for (let i = 0; i < projects.projectList.length; i++){
            if (task.project === projects.projectList[i].name){
                projects.projectList[i].taskList.push(task);
            }
        }
    }

    return { projectList, newProject, addToProjectList, addTaskToProject };
})()

export default projects;