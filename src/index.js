import './styles.css';
import cacheDOM from './cacheDOM.js';
import forms from './forms.js';


// if Add Task button is clicked, open a form for inputting task information
cacheDOM.taskButton.addEventListener('click', forms.openTaskForm)

// export the html main element for use in opening the form
let main = document.querySelector('main');
export default main;
