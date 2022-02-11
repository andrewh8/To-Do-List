const cacheDOM = (() => {

    const taskButton = document.querySelector('#addTask');
    const projectButton = document.querySelector('#addProject');

    return { taskButton, projectButton };
})()

export default cacheDOM;