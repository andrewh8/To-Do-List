const tasks = (() => {

    // array for holding task objects
    const taskList = [];

    // factory for creating task objects
    const newTask = (title, description, dueDate, project) => {
        return { title, description, dueDate, project };
    }

    // function for adding task objects to the tasklist array
    function addToTaskList(task){
        taskList.push(task);
    }

    return { taskList, newTask, addToTaskList };
})()

export default tasks;