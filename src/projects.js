const projects = (() => {

    // create default "unassigned" project
    const unassignedTask = [];

    // array for holding project objects
    const projectList = [];

    // factory for creating project objects
    const newProject = (name) => {
        let taskList = [];
        return { name, taskList };
    }

    function addProjectToProjectList(project){
        projectList.push(project);
    
    }

    return { projectList, newProject, addProjectToProjectList };
})()

export default projects;